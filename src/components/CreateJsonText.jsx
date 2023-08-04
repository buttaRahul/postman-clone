import { TextareaAutosize, Typography } from "@mui/material"

const CreateJsonText = () => {
  
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
    <div>
        <Typography mt={2} mb={2}>JSON</Typography>
        <TextareaAutosize 
            minRows={3}
            maxRows={5}
            style={textareaStyle }
        />
    </div>
  )
}

export default CreateJsonText