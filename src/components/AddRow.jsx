import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";

const AddRow = ({ addRows, rowId, data, setData }) => {
  const [status, setStauts] = useState(false);

  const handleChange = (e) => {
    let result = data.filter((entry) => entry.id === Number(e.target.name))[0];

    if (!status) {
      setStauts(true);
      addRows((oldArr) => [...oldArr, rowId]);
      result= {...result,check: true}
    } else {
      setStauts(false);
      result = {...result,check:false};
    }

    let index = data.findIndex((value) => value.id === Number(e.target.name));

    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArray = Object.assign([...data], {
        [index]: result,
      });

      setData(newArray);
    }
  };

  const onTextChange = (e) => {
    let result = data.filter((entry) => entry.id === rowId)[0];
    result = { ...result, id: rowId, [e.target.name]: e.target.value };

    let index = data.findIndex((value) => value.id === rowId);

    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArray = Object.assign([...data], {
        [index]: result,
      });

      setData(newArray);
    }
    console.log(data);
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
          name={rowId}
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
          onChange={(e) => onTextChange(e)}
          name="key"
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
          onChange={(e) => onTextChange(e)}
          name="value"
        />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
