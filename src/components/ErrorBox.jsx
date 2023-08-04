import { Box, Typography } from "@mui/material"

const ErrorBox = () => {

    const error = 'https://i.stack.imgur.com/01tZQ.png'
  return (
    <Box>
        <Typography mt={2} mb={2}></Typography>
        <Box
          sx={{
            display:'flex',
            width:'60%',
            height:'auto',
            margin:'auto',
            objectPosition:'center 0%'
          }}
        >
            <img src={error} alt="error" />
        </Box>
    </Box>
  )
}

export default ErrorBox;