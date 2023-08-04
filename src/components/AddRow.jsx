import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";

const AddRow = () => {
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
          size="large"
          sx={{
            padding: ["2px 5px", "!important"],
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
