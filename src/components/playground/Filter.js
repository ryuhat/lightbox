import Grid from "@mui/material/Grid";

const Filter = ({ children }) => (
  <Grid item xs={12} sm={6} lg={4}>
    {children}
  </Grid>
);

export default Filter;
