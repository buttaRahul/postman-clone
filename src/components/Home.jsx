import Header from "./Header";
import From from "./Form";
import { Box } from "@mui/material";
import TabBar from "./TabBar";
import Response from "./Response";
import ErrorBox from "./ErrorBox";
import { useContext, useState } from "react";
import { DataContext } from "./context/DataProvider";
import { checkParams } from "../utils/common-utils";

const Home = () => {

  const [error, setError ] = useState(false);
  const [errorMsg, setErrorMsg] useState('');
  
  const {formData, jsonText, parmData,headerData} = useContext(DataContext);

  const onSendClick = ()=>{
      if(!checkParams(formData,jsonText,parmData,headerData,setErrorMsg)){
        return false;
      }
  }
  
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "60%",
          margin: "20px auto 0 auto",
        }}
      >
        <From onSendClick={onSendClick}/>
        <TabBar />
        {/* <Response/> */}

        <ErrorBox />
      </Box>
    </>
  );
};

export default Home;
