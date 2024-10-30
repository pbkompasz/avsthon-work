import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import Contract from "./Contract";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textColor: "black",
};

const ContractEdit = ({
  id,
  open,
  closeEdit,
}: {
  id: string;
  closeEdit: (id: string) => void;
  open: boolean;
}) => {
  // TODO Fetch contract
  const [contract, setContract] = useState<Contract>();

  useEffect(() => {
    setContract({
      name: "vich tits",
      id,
      numberOfParticipants: 4,
      status: "created",
    });
  }, []);

  return (
    <Modal
      open={open}
      onClose={closeEdit}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {contract?.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ContractEdit;
