import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MikeSoft from "../images/MikeSoft.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  const styles = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  };
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const openWhatsapp = () => {
    window.open("https://wa.me/73222066", "_blank");
  };
  const openMaps = () => {
    window.open("https://maps.app.goo.gl/DeqMiyJ9dzsr3ZbA6", "_blank");
  };
  return (
    <Box
      sx={{
        background: "#2d2e33",
        flexGrow: 1,
        height: "auto",
        display: "block",
        position: "flex",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          padding: "25px 25px",
          width: "100vw",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            paddingTop: "15px",
            top: "0",
            alignItems: "flex-start",
            width: "100vw",
          }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              <Box sx={{ display: "flex", width: "180px" }}>
                <img src={MikeSoft} alt="MikeSoft" />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "right",
                },
                paddingRight: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  textAlign: {
                    xs: "center",
                    md: "right",
                  },
                  width: "100%",
                  justifyContent: {
                    xs: "center",
                    md: "right",
                  },
                }}
              >
                <Typography color="white" sx={{ lineHeight: "1.5" }}>
                  Web desarrollado por: <br /> © Miguel Callizaya • Diseñador
                  Web
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", width: "100vw", justifyContent: "center" }}>
        <IconButton
          component="a"
          href="https://api.whatsapp.com/send/?phone=59178605538&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <WhatsAppIcon color="primary" sx={{ fontSize: 32 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.facebook.com/miguelreynaldo.callizayameave/"
          target="_blank"
        >
          <FacebookIcon color="primary" sx={{ fontSize: 32 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/Cybernetic-mike"
          target="_blank"
        >
          <GitHubIcon color="primary" sx={{ fontSize: 32 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/miguel-callizaya-meave-b30001281/"
          target="_blank"
        >
          <LinkedInIcon color="primary" sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
