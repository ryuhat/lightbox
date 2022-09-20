import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Settings = ({ children }) => (
  <Paper variant="outlined" sx={{ p: 2, textAlign: "left" }}>
    <Grid container rowSpacing={2} columnSpacing={4}>
      {children}
    </Grid>
  </Paper>
);

export default Settings;
