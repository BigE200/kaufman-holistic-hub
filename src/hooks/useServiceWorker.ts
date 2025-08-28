import { useEffect } from 'react';
import { register } from '@/lib/serviceWorkerRegistration';

// Service worker setup with user-friendly notifications
const useServiceWorker = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      register({
        onSuccess: () => {
          // Silent success - don't notify user unless there's an update
        },
        onUpdate: (registration) => {
          // Show a simple alert for now - could be enhanced with a proper toast
          if (confirm('New version available! Would you like to update?')) {
            if (registration && registration.waiting) {
              registration.waiting.postMessage({ type: 'SKIP_WAITING' });
              window.location.reload();
            }
          }
        },
      });
    }
  }, []);
};

export default useServiceWorker;