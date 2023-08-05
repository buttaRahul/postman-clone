import { Snackbar } from "@mui/base";



const SnackBar = ({error,setError,errorMsg}) => {

  const handleClose = () =>{
    setError(false);
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={errorMsg}
    />
  );
};

export default SnackBar;
