// useAos.ts
import 'aos/dist/aos.css'; // Import AOS styles

import AOS from 'aos';
import { useEffect } from 'react';

// This interface could be expanded with more specific settings from AOS if needed
interface AosSettings {
  duration?: number;
  once?: boolean;
  mirror?: boolean;
  disable?: 'phone' | 'mobile' | 'tablet';
  anchorPlacement?:
    | 'top-bottom'
    | 'top-center'
    | 'top-top'
    | 'center-bottom'
    | 'center-center'
    | 'center-top'
    | 'bottom-bottom'
    | 'bottom-center'
    | 'bottom-top';
  // Add other AOS-specific options here
}

export const useAos = (settings?: AosSettings) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      disable: settings?.disable,
      duration: settings?.duration || 400, // defaults to 400ms
      once: settings?.once || false, // whether animation should happen only once - while scrolling down
      mirror: settings?.mirror || false, // whether elements should animate out while scrolling past them
      anchorPlacement: settings?.anchorPlacement || 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      // ... You can add more AOS settings here
    });

    // Cleanup function to refresh AOS on component unmount
    return () => {
      AOS.refresh();
    };
  }, [settings]); // Re-initialize if settings change
};
