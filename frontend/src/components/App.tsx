import Stack from "@mui/material/Stack";
import "./App.css";
import Typography from "@mui/material/Typography";

function App() {
  const account = {
    role: "employer",
  };

  const ongoingContracts = 0;
  const contractsSecured = 0;
  const valueSecured = 0;
  const upcommingResolutions = 0;
  const earned = 0;

  return (
    <Stack alignItems="start" padding={2} textAlign="left">
      <Typography variant="h1">Home</Typography>
      <Typography fontSize={24}>Ongoing contracts: {ongoingContracts}</Typography>
      {account.role === "employer" ? (
        <Stack>
          <Typography fontSize={24}>
            Secured contracts: {contractsSecured} (${valueSecured})
          </Typography>
          <Typography fontSize={24}>Interest earned: {earned}</Typography>
          <Typography fontSize={24}>
            Upcomming disputes: {upcommingResolutions}{" "}
          </Typography>
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default App;
