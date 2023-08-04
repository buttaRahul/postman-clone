import { Box, Button, MenuItem, Select, TextField } from "@mui/material";

const From = () => {
  return (
    <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      }}>
      <Select
        label="POST"
        sx={{ width: "150px", height: "40px" }} 
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
      />

      <Button
        variant="contained"

        sx={{
          width:'100px',
          height:'40px',
          marginLeft:'5px',
        }}

      >
        Send
      </Button>
    </Box>
  );
};

export default From;
