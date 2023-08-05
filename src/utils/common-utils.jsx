const checkValidJson = (text) => {
  if (
    /^[\],:{}\s]*$/.test(
      text
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const checkParams = (formData, jsonText, paramData, headerData,setErrorMsg) => {
  if (!formData.url) {
    setErrorMsg("Reuqest URL is Missing")
    return false;
  }

  if (!checkValidJson(jsonText)) {
    setErrorMsg("Text is not a vaid Json")
    return false;
  }
  return true;
};
