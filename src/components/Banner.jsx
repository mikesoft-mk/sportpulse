import { Box } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
import "../css/styles.css";

function Banner() {
  return (
    <Box id="home" sx={{ flexGrow: 1, background: "#103471" }}>
      <Box
        position="relative"
        sx={{
          display: "auto",
          textAlign: "center",
          //paddingTop: "50px",
        }}
      >
        <img className="dim-logo" alt="logo" src={logo} />
      </Box>
    </Box>
  );
}

export default Banner;
