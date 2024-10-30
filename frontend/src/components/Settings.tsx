import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Settings = () => {
  const [marketplaceParticipant, setMarketplaceParticipant] = useState(false);

  return (
    <Stack>
      <Typography>Settings</Typography>
      <FormControlLabel
        label="Marketplace Participant"
        control={
          <Checkbox
            checked={marketplaceParticipant}
            onChange={() => setMarketplaceParticipant(!marketplaceParticipant)}
          />
        }
      />
    </Stack>
  );
};

export default Settings;
