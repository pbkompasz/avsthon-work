import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

type Job = {
  name: string;
  description: string;
  price: string;
};
type Freelancer = {
  name: string;
  speciality: string;
};

const Marketplace = () => {
  const [jobs] = useState<Job[]>([]);
  const [freelancers] = useState<Freelancer[]>([]);

  return (
    <Stack alignItems="start" padding={2}>
      <Typography variant="h2">Marketplace</Typography>
      <Stack
        direction="row"
        style={{ width: "100%" }}
        justifyContent="space-between"
        gap={2}
      >
        <Stack style={{ width: "50%" }} alignItems="start">
          <Typography variant="h4">Jobs</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack style={{ width: "50%" }} alignItems="start">
          <Typography variant="h4">Freelancers</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Speciality</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {freelancers.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.speciality}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Marketplace;
