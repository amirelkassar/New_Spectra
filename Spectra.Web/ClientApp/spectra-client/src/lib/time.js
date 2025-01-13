import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ar';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

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

/**
 * تحويل كائن الوقت إلى Time Format (HH:mm:ss)
 * @param {Object} timeObject - {hour, minute, second, millisecond}
 * @returns {string} - Time Format (HH:mm:ss)
 */
export const objectToTimeFormat = (timeObject) => {
  const { hour, minute, second } = timeObject;

  // إنشاء توقيت باستخدام dayjs
  const time = dayjs()
    .hour(hour || 0)
    .minute(minute || 0)
    .second(second || 0)
    .millisecond(0); // تجاهل millisecond عند تحويله إلى صيغة HH:mm:ss

  return time.format('HH:mm:ss');
};

/**
 * تحويل Time Format (HH:mm:ss) إلى كائن
 * @param {string} timeFormat - Time Format (HH:mm:ss)
 * @returns {Object} - {hour, minute, second, millisecond}
 */
export const timeFormatToObject = (timeFormat) => {
  const time = dayjs(timeFormat, 'HH:mm:ss');

  return {
    hour: time.hour(),
    minute: time.minute(),
    second: time.second(),
    millisecond: 0, // نتركها دائمًا 0 في هذه الحالة
  };
};

/**
 * تحويل Time Format (HH:mm:ss) إلى صيغة 12 ساعة (hh:mm A)
 * @param {string} timeFormat - Time Format (HH:mm:ss)
 * @returns {string} - Time Format (hh:mm A)
 */
export const convertTo12HourFormat = (timeFormat, locale = 'en') => {
  return dayjs(timeFormat, 'HH:mm:ss')
    .locale(locale)
    .format('hh:mm A');
};
