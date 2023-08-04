import { Box, TextareaAutosize, Typography } from "@mui/material";

const Response = () => {


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



  return (
    <Box>
          <Typography mt={2} mb={2}>Response</Typography>
          <TextareaAutosize
                minRows={3}
                maxRows={5}
                style={textareaStyle}
                disabled="disabled"
          />
    </Box>
  )
}

export default Response;