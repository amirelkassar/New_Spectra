'use client';

import { useEffect, useState } from 'react';
import { useTimeout } from '@mantine/hooks';

/**
 * useDelayedState Hook
 * Delays updating a state value for a specified duration.
 *
 * @param {boolean} condition - The condition to monitor.
 * @param {number} delay - The delay duration in milliseconds.
 * @returns {boolean} - The delayed state value.
 */

export const useDelay = (condition, delay) => {
  const [delayedState, setDelayedState] = useState(false);

  const { start, clear } = useTimeout(
    () => setDelayedState(true),
    delay
  );

  useEffect(() => {
    if (condition) {
      start();
    } else {
      clear();
      setDelayedState(false);
    }
  }, [condition, start, clear]);

  return delayedState;
};
