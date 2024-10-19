const GetErrorMsg = (error, title) =>
  error?.response?.data?.errors[title]?.length
    ? error.response.data.errors[title][0]
    : "";

export default GetErrorMsg;
