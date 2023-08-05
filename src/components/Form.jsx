import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./context/DataProvider";

const From = ({onSendClick}) => {
  const { formData, setFromData } = useContext(DataContext);

  const handleChange = (e) => {
    setFromData({ ...formData, type: e.target.value });
  };

  const onURLChange = (e) => {
    setFromData({ ...formData, url: e.target.value });
    console.log(formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Select
        value={formData.type}
        label="POST"
        sx={{
          width: "150px",
          height: "40px",
        }}
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value="POST">POST</MenuItem>
        <MenuItem value="GET">GET</MenuItem>
      </Select>
      <TextField
        size="small"
        sx={{
          width: "100%",
          backgroundColor: "#F6F6F6",
        }}
        onChange={(e) => onURLChange(e)}
      />

      <Button
        variant="contained"
        sx={{
          width: "100px",
          height: "40px",
          marginLeft: "5px",
        }}

        onClick={()=> onSendClick()}
      >
        Send
      </Button>
    </Box>
  );
};

export default From;
