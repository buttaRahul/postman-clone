// import Snackbar from "@mui/material/Snackbar";

import { Snackbar } from "@mui/material";

const SnackBar = ({ error, setError, errorMsg }) => {
  console.log(error, errorMsg);
  const handleClose = () => {
    setError(false);
  };

  return (
    <Snackbar
      open={error}
      autoHideDuration={3000}
      onClose={handleClose}
      message={errorMsg}
    />
  );
};

export default SnackBar;
