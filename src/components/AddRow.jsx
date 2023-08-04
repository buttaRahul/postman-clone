import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";

const AddRow = ({ addRows, rowId }) => {
  const [status, setStauts] = useState(false);

  const handleChange = (e) => {
    if (!status) {
      setStauts(true);
      addRows((oldArr) => [...oldArr, rowId]);
    } else {
      setStauts(false);
    }
  };

  return (
    <TableRow>
      <TableCell
        sx={{
          border: "1px solid rgba(224,224,224,1)",
          borderCollapse: "collapse",
          padding: ["7px 5px", "!important"],
        }}
      >
        <Checkbox
          checked={status}
          size="large"
          sx={{
            padding: ["2px 5px", "!important"],
          }}
          onChange={(e) => handleChange(e)}
        />
      </TableCell>
      <TableCell
        sx={{
          border: "1px solid rgba(224,224,224,1)",
          borderCollapse: "collapse",
          padding: ["7px 5px", "!important"],
        }}
      >
        <TextField
          sx={{
            width: "100%",
          }}
          inputProps={{
            style: {
              height: "30px",
              padding: "0px 5px",
            },
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          border: "1px solid rgba(224,224,224,1)",
          borderCollapse: "collapse",
          padding: ["7px 5px", "!important"],
        }}
      >
        <TextField
          sx={{
            width: "100%",
          }}
          inputProps={{
            style: {
              height: "30px",
              padding: "0px 5px",
            },
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
