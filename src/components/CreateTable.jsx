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

const CreateTable = ({ text }) => {
  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell >KEY</TableCell>
            <TableCell >VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <AddRow/>
        </TableBody>
      </Table>
    </Box>
  );
};

export default CreateTable;
