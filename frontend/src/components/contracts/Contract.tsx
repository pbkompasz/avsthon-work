import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Contract.css";
import ContractEdit from "./ContractEdit";
import ContractCreate from "./ContractCreate";

type Contract = {
  id: string;
  name: string;
  status: "created" | "negotiation" | "dispute" | "completed";
  numberOfParticipants: number;
  requireCompetence?: boolean;
  category?: string;
};

const ContractStatus = ({ status }: { status: string }) => {
  let color = "#0390fc";
  switch (status) {
    case "negotiation":
      color = "#f8fc03";
      break;
    case "dispute":
      color = "#ff0000";
      break;
    case "completed":
      color = "#1cfc03";
      break;
    default:
      break;
  }
  return <p style={{ color }}>{status.toUpperCase()}</p>;
};

const Contract = () => {
  const [isEmployer] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [contractToEdit, setContractToEdit] = useState<undefined | string>();
  const [createOpen, setCreateOpen] = useState(true);
  const [contracts] = useState<Contract[]>([
    {
      id: "asdgdsagdsagfds",
      status: "created",
      name: "Sample job",
      numberOfParticipants: 2,
    },
  ]);

  const openEdit = (id: string) => {
    setContractToEdit(id);
    setEditOpen(true);
  };

  // TODO Notify table, like some effect
  const closeEdit = (id: string) => {
    setContractToEdit(undefined);
    setEditOpen(false);
  };

  const openCreate = () => {
    setCreateOpen(true);
  };

  // TODO Notify user, new contract popup
  const closeCreate = (id: string) => {
    setCreateOpen(false);
  };

  return (
    <Stack style={{ padding: "0 2rem" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h1>Contracts</h1>
        {isEmployer && (
          <Button
            variant="outlined"
            style={{ height: "4rem" }}
            onClick={() => openCreate()}
          >
            Create new contract
          </Button>
        )}
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Participants</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  <ContractStatus status={row.status} />
                </TableCell>
                <TableCell align="right">{row.numberOfParticipants}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" onClick={() => openEdit(row.id)}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined">Deposit</Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined">Publish</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ContractEdit
        open={editOpen}
        closeEdit={closeEdit}
        id={contractToEdit as string}
      ></ContractEdit>

      <ContractCreate
        open={createOpen}
        closeCreate={closeCreate}
      ></ContractCreate>
    </Stack>
  );
};

export default Contract;
