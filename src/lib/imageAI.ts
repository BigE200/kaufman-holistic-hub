import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js to always fetch models (no local file caching)
env.allowLocalModels = false;
env.useBrowserCache = false;

// Force ONNX WebAssembly backend for compatibility (no SharedArrayBuffer requirement)
// and disable proxy worker to avoid cross-origin/worker restrictions in sandboxes
const anyEnv: any = env;
anyEnv.backends = anyEnv.backends ?? {};
anyEnv.backends.onnx = anyEnv.backends.onnx ?? {};
anyEnv.backends.onnx.wasm = anyEnv.backends.onnx.wasm ?? {};
anyEnv.backends.onnx.wasm.numThreads = 1;
anyEnv.backends.onnx.wasm.proxy = false;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement
) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  console.log('Starting background removal process...');
  const segmenter = await (async () => {
    try {
      return await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
        device: 'wasm',
      });
    } catch (e) {
      console.warn('Primary model failed, falling back to RMBG-1.4', e);
      return await pipeline('image-segmentation', 'briaai/RMBG-1.4', {
        device: 'wasm',
      });
    }
  })();
  
  // Convert HTMLImageElement to canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');
  
  // Resize image if needed and draw it to canvas
  const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
  console.log(`Image ${wasResized ? 'was' : 'was not'} resized. Final: ${canvas.width}x${canvas.height}`);
  
  // Get image data as base64
  const imageData = canvas.toDataURL('image/jpeg', 0.9);
  console.log('Image converted to base64');
  
  // Process the image with the segmentation model
  console.log('Processing with segmentation model...');
  const result: any = await segmenter(imageData);
  console.log('Segmentation result:', result);
  
  if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
    throw new Error('Invalid segmentation result');
  }
  
  // Create a new canvas for the masked image
  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = canvas.width;
  outputCanvas.height = canvas.height;
  const outputCtx = outputCanvas.getContext('2d');
  if (!outputCtx) throw new Error('Could not get output canvas context');
  
  // Draw original image
  outputCtx.drawImage(canvas, 0, 0);
  
  // Apply inverted mask to alpha channel (keep subject, remove background)
  const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
  const data = outputImageData.data;
  const maskData: Float32Array = result[0].mask.data;
  
  for (let i = 0; i < maskData.length; i++) {
    const alpha = Math.round((1 - maskData[i]) * 255);
    data[i * 4 + 3] = alpha;
  }
  
  outputCtx.putImageData(outputImageData, 0, 0);
  console.log('Mask applied successfully');
  
  // Convert canvas to blob (PNG preserves transparency)
  return new Promise((resolve, reject) => {
    outputCanvas.toBlob((blob) => {
      if (blob) {
        console.log('Successfully created final blob');
        resolve(blob);
      } else {
        reject(new Error('Failed to create blob'));
      }
    }, 'image/png', 1.0);
  });
};

export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};
