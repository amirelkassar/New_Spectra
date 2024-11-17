'use client';

import { useEffect, useRef } from 'react';
import { useClientVideoStore } from './use-client-video-store';

export const useToggleFullScreenByDrag = (elementRef) => {
  const startYRef = useRef(null);

  const enterFullScreen = useClientVideoStore(
    (s) => s.enterFullScreen
  );
  const exitFullScreen = useClientVideoStore(
    (s) => s.exitFullScreen
  );

  useEffect(() => {
    // if not touch device, return
    if (!window.matchMedia('(pointer: coarse)').matches)
      return;

    const element = elementRef.current;
    if (!element) return;

    const getTouchY = (event) => event.touches[0]?.clientY;

    const handleStart = (event) => {
      startYRef.current =
        event instanceof MouseEvent
          ? event.clientY
          : getTouchY(event);
    };

    const handleMove = (event) => {
      if (startYRef.current === null) return;

      const currentY =
        event instanceof MouseEvent
          ? event.clientY
          : getTouchY(event);

      if (currentY === undefined) return;

      const deltaY = currentY - startYRef.current;
      if (deltaY < -5) {
        exitFullScreen();
      } else if (deltaY > 5) {
        enterFullScreen();
      }
    };

    const handleEnd = () => {
      startYRef.current = null;
    };

    // Touch events
    element.addEventListener('touchstart', handleStart);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      element.removeEventListener(
        'touchstart',
        handleStart
      );
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [elementRef, enterFullScreen, exitFullScreen]);

  return null;
};
