import Header from "./Header";
import Form from "./Form";
import { Box } from "@mui/material";
import TabBar from "./TabBar";
import Response from "./Response";
import ErrorBox from "./ErrorBox";
import { useContext, useState } from "react";
import { DataContext } from "./context/DataProvider";
import { checkParams } from "../utils/common-utils";
import SnackBar from "./SnackBar";
import { getData } from "../service/Api";

const Home = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});

  const {
    formData,
    jsonText,
    parmData: paramData,
    headerData,
  } = useContext(DataContext);

  const onSendClick = async () => {
    if (!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
      setError(true);
      return false;
    }

    let response = await getData(formData, jsonText, paramData, headerData);

    if (response === "error") {
      setErrorResponse(true);
      return;
    }
    setErrorResponse(false);
    setApiResponse(response.data);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          width: "60%",
          margin: "20px auto 0 auto",
        }}
      >
        <Form onSendClick={onSendClick} />
        <TabBar />
        {/* <Response/> */}

        {/* <ErrorBox /> */}
        {errorResponse ? <ErrorBox /> : <Response data={apiResponse} />}
        {error && (
          <SnackBar errorMsg={errorMsg} error={error} setError={setError} />
        )}
      </Box>
    </>
  );
};

export default Home;
