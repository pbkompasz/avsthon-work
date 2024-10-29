import Stack from "@mui/material/Stack";
import "./App.css";
import Typography from "@mui/material/Typography";

function App() {
  const account = {
    role: "employer",
  };

  const contractsSecured = 0;
  const valueSecured = 0;

  return (
    <Stack>
      <Typography>Home</Typography>
      Ongoing contracts: {}
      {account.role === "employer" ? (
        <Stack>
          <Typography>Secured contracts: {contractsSecured} ({valueSecured})</Typography>
          <Typography>Interested earned</Typography>
          
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default App;
