import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { type Contract, createContract } from "../../contract";
import { submitContract } from "../../tasks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
  backgroundColor: "white",
};

type Milestone = {
  name?: string;
  price?: number;
};

const ContractCreate = ({
  open,
  closeCreate,
}: {
  closeCreate: (id: string) => void;
  open: boolean;
}) => {
  // TODO Fetch contract
  const [contract, setContract] = useState<Contract>();
  const [milestones, setMilestones] = useState<Milestone[]>([{}]);
  const [hideEmployerInformation, setHideEmployerInformation] = useState(true);
  const [usePooledValidation, setUsePooledValidation] = useState(true);
  const [upstreamMarketplace, setUpstreamMarketplace] = useState(true);
  const [generateProvers, setGenerateProvers] = useState(false);
  const [priceRanges] = useState(false);
  const [category] = useState(false);

  const addMilstone = () => {
    setMilestones([...milestones, {}]);
  };

  const completeCreation = () => {
    submitContract();
  };

  useEffect(() => {
    // TODO Create empty contract, optimistic
    createContract().then(({ contract }) => {
      setContract(contract);
    });
  }, []);

  return (
    <Modal
      open={open}
      onClose={closeCreate}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Create contract
        </Typography>
        <Stack direction="row" gap={2}>
          <Stack>
            <Box paddingTop={1}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Contract Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={contract?.category}
                  label="Contract Category"
                >
                  <MenuItem value={"frontend"}>Frontend</MenuItem>
                  <MenuItem value={"backend"}>Backend</MenuItem>
                  <MenuItem value={"smart_contract"}>Smart Contract</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Stack direction="row" gap={2} paddingY={1}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                color="primary"
              />
              <TextField
                id="outlined-basic"
                label="Total Cost (USDC)"
                variant="outlined"
                color="primary"
              />
            </Stack>
            <Stack direction="row" justifyContent="space-between" paddingY={1}>
              <Typography variant="h5">Milestones</Typography>
              <Button variant="outlined" onClick={addMilstone}>
                Add milestone
              </Button>
            </Stack>
            {milestones.map((_milestone, index) => (
              <Stack
                direction="row"
                gap={2}
                paddingBottom={1}
                alignItems="center"
              >
                {index + 1}
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  color="primary"
                />
                <TextField
                  id="outlined-basic"
                  label="Cost"
                  variant="outlined"
                  color="primary"
                />
              </Stack>
            ))}
          </Stack>
          <Stack>
            <Typography variant="h5">Dispute Resolution</Typography>
            <FormControlLabel
              label="Pooled Validation"
              control={
                <Checkbox
                  checked={usePooledValidation}
                  onChange={() => setUsePooledValidation(!usePooledValidation)}
                />
              }
            />
            <Stack direction="row" gap={2}>
              <TextField
                id="outlined-basic"
                label="Number of validators"
                variant="outlined"
                color="primary"
                disabled={!usePooledValidation}
              />
              <TextField
                id="outlined-basic"
                label="Threshold (0-100)"
                variant="outlined"
                color="primary"
                disabled={!usePooledValidation}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Marketplace</Typography>
          <FormControlLabel
            label="Upstream contract to marketplace"
            control={
              <Checkbox
                checked={upstreamMarketplace}
                onChange={() => setUpstreamMarketplace(!upstreamMarketplace)}
              />
            }
          />
          <FormControlLabel
            label="Hide Employer information"
            control={
              <Checkbox
                checked={hideEmployerInformation}
                onChange={() =>
                  setHideEmployerInformation(!hideEmployerInformation)
                }
              />
            }
          />
          <FormControlLabel
            label="Generate Prover Circuits"
            control={
              <Checkbox
                checked={generateProvers}
                onChange={() => setGenerateProvers(!generateProvers)}
                disabled={hideEmployerInformation}
              />
            }
          />
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            <FormControlLabel
              label="Price Ranges"
              control={
                <Checkbox
                  checked={priceRanges}
                  disabled={!generateProvers || hideEmployerInformation}
                />
              }
            />
            <FormControlLabel
              label="Category"
              control={
                <Checkbox
                  checked={category}
                  disabled={!generateProvers || hideEmployerInformation}
                />
              }
            />
          </Box>
        </Stack>
        <Stack>
          <Typography variant="h5">Participants</Typography>
        </Stack>
        <Button onClick={completeCreation}>Create Contract</Button>
      </Stack>
    </Modal>
  );
};

export default ContractCreate;
