import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const LightboxButton = ({ onClick }) => (
  <Box sx={{ mb: 2 }}>
    <Button variant="contained" onClick={onClick}>
      Open Lightbox
    </Button>
  </Box>
);

export default LightboxButton;
