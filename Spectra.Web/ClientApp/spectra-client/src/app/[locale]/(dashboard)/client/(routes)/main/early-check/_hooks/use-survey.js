'use client';

import { useEffect, useState } from 'react';

import { calculateAgeInMonths } from '@/lib/utils';

export const useSurvey = ({
  forms = {},
  dateOfBirth = '',
}) => {
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    if (!forms || !dateOfBirth) return setSurveyData([]);

    const ageInMonths = calculateAgeInMonths(dateOfBirth);
    if (!ageInMonths) return setSurveyData([]);

    const key = getKeyOfAgeInMonths(ageInMonths);
    if (!key) return setSurveyData([]);

    setSurveyData(forms[key]);
  }, [forms, setSurveyData, dateOfBirth]);

  return {
    surveyData,
  };
};

function getKeyOfAgeInMonths(ageInMonths) {
  if (typeof ageInMonths !== 'number') return null;
  if (ageInMonths >= 0 && ageInMonths <= 2) {
    return 'twoMonths';
  } else if (ageInMonths > 2 && ageInMonths <= 4) {
    return 'fourMonths';
  } else if (ageInMonths > 4 && ageInMonths <= 6) {
    return 'sixMonths';
  } else if (ageInMonths > 6 && ageInMonths <= 9) {
    return 'nineMonths';
  } else if (ageInMonths > 9 && ageInMonths <= 12) {
    return 'twelveMonths';
  } else {
    return null;
  }
}
