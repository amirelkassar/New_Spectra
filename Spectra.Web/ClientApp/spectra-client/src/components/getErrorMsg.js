const generalErrorKeys = [
  'RequestError',
  'DbError',
  'NotFoundError',
  'UnknownError',
];

const GetErrorMsg = (error, title) => {
  if (!error) return '';

  const messages = error?.response?.data?.errors;
  const code = error?.response?.data?.Code;

  if (!messages) return '';

  if (!Object?.keys(messages)?.length) return '';

  if (title === 'general') {
    if (code === 401) return 'لا تملك الصلاحيات الكافية';
    const generalError = generalErrorKeys.find(
      (key) => messages[key]
    );
    return messages[generalError]?.join(', ');
  }

  if (messages[title]) return messages[title]?.join(', ');

  return '';
};

export default GetErrorMsg;
