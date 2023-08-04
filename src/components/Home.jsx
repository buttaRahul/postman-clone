import Header from "./Header";
import From from "./Form";
import { Box } from "@mui/material";
import TabBar from "./TabBar";
import Response from "./Response";

const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "60%",
          margin: "20px auto 0 auto",
        }}
      >
        <From />
        <TabBar />
        <Response/>
      </Box>
    </>
  );
};

export default Home;
