import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddRow from "./AddRow";
import { useState } from "react";

const CreateTable = ({ text }) => {
  const [rows, addRows] = useState([0]);

  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table
        sx={{
          minWidth: "100%",
          border: "1px solid rgba(224,224,224,1)",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid rgba(224,224,224,1)",
                borderCollapse: "collapse",
                padding: ["7px 5px", "!important"],
              }}
            ></TableCell>
            <TableCell
              sx={{
                border: "1px solid rgba(224,224,224,1)",
                borderCollapse: "collapse",
                padding: ["7px 5px", "!important"],
              }}
            >
              KEY
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid rgba(224,224,224,1)",
                borderCollapse: "collapse",
                padding: ["7px 5px", "!important"],
              }}
            >
              VALUE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <AddRow addRows={addRows} rwoId={index} key={index} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CreateTable;
