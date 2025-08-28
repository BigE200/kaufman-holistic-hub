import { useState, useCallback } from 'react';

interface ImageLoadState {
  loaded: boolean;
  error: boolean;
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23f3f4f6" viewBox="0 0 24 24"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/%3E%3C/svg%3E',
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [loadState, setLoadState] = useState<ImageLoadState>({
    loaded: false,
    error: false
  });

  const handleLoad = useCallback(() => {
    setLoadState({ loaded: true, error: false });
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setLoadState({ loaded: false, error: true });
    onError?.();
  }, [onError]);

  // Generate WebP source if supported
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loadState.loaded && !loadState.error && (
        <div className="absolute inset-0 bg-medical-gray-100 animate-pulse flex items-center justify-center">
          <img
            src={placeholder}
            alt=""
            className="w-8 h-8 opacity-50"
            aria-hidden="true"
          />
        </div>
      )}
      
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            loadState.loaded ? 'opacity-100' : 'opacity-0'
          } ${loadState.error ? 'hidden' : ''}`}
          style={{
            maxWidth: '100%',
            height: 'auto',
            ...(width && height && { aspectRatio: `${width}/${height}` })
          }}
        />
      </picture>
      
      {loadState.error && (
        <div className="absolute inset-0 bg-medical-gray-100 flex items-center justify-center">
          <span className="text-medical-gray-500 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;