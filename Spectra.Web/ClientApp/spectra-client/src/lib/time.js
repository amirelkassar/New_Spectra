import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * تحويل كائن الوقت إلى ISO مع المنطقة الزمنية للمستخدم
 * @param {Object} timeObject
 * @returns {string} ISO String
 */
export const convertToISOWithUserTimezone = (timeObject) => {
  const { hour, minute, second, millisecond } = timeObject;

  // إنشاء توقيت معتمد على توقيت الجهاز الحالي
  const date = dayjs()
    .hour(hour || 0)
    .minute(minute || 0)
    .second(second || 0)
    .millisecond(millisecond || 0)
    .local(); // التوقيت المحلي

  return date.toISOString();
};

/**
 * عرض الوقت في منطقة زمنية معينة
 * @param {string} isoString
 * @param {string} userTimezone
 * @returns {string} الوقت المنسق مع المنطقة الزمنية
 */
export const formatTimeForUserTimezone = (
  isoString,
  userTimezone
) => {
  return dayjs(isoString)
    .tz(userTimezone || dayjs.tz.guess())
    .format('hh:mm A');
};
