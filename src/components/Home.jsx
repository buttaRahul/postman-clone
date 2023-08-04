import Header from "./Header";
import From from "./Form";
import { Box } from "@mui/material";

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
      </Box>
    </>
  );
};

export default Home;
