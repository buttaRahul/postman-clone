import { Box, TextareaAutosize, Typography } from "@mui/material";

const Response = ({data}) => {


    const textareaStyle  = {
        width:'100%',
        padding:'10px',
        background: `url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment:'local',
        backgroundRepeat:'no-repeat',
        paddingLeft:'35px',
        paddingTop:'10px',
        borderColor:'#ccc',
      }


    const obj = data;
    let readableObj = '{\n';
    for(let key in obj){
      readableObj += '\t'
      readableObj += (typeof obj[key] === 'string') ? `${key} : "${obj[key]}"` : `${key}:${obj[key]}`;
      if(Object.keys(obj).pop() !== key.toString()){
        readableObj += ',\n';
      }
    }
    readableObj += '\n}';


  return (
    <Box>
          <Typography mt={2} mb={2}>Response</Typography>
          <TextareaAutosize
                minRows={3}
                maxRows={5}
                style={textareaStyle}
                disabled="disabled"
                value={readableObj}
          />
    </Box>
  )
}

export default Response;