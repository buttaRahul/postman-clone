import { TextareaAutosize, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./context/DataProvider";

const textareaStyle = {
  width: "100%",
  padding: "10px",
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: "local",
  backgroundRepeat: "no-repeat",
  paddingLeft: "35px",
  paddingTop: "10px",
  borderColor: "#ccc",
};

const CreateJsonText = () => {
  const { setJsonText } = useContext(DataContext);

  const onValueChange = (e) => {
    setJsonText(e.target.value);
  };

  return (
    <div>
      <Typography mt={2} mb={2}>
        JSON
      </Typography>
      <TextareaAutosize
        minRows={3}
        maxRows={5}
        style={textareaStyle}
        onChange={(e) => onValueChange(e)}
      />
    </div>
  );
};

export default CreateJsonText;
