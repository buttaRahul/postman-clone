import Header from "./Header";
import From from "./Form";
import { Box } from "@mui/material";
import TabBar from "./TabBar";

const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width:'60%',
          margin:'20px auto 0 auto',

        }}
      >
        <From />
        <TabBar/>
      </Box>
    </>
  );
};

export default Home;
