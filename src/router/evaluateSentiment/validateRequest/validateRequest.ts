const validateRequest = (body: any) => {
  const { text } = body;

  if (
    typeof text === 'string'
    && text.length > 0
  ) {
    return true;
  } else {
    return false;
  }
};


export default validateRequest
