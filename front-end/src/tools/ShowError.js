import React from "react";
import { Typography } from "@mui/material";

const ShowError = ({ message }) => {
  if (!message) return null;

  return (
    <Typography color="error" style={{ marginTop: "100 px" }}>
      {message}
    </Typography>
  );
};

export default ShowError;
