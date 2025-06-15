import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import AboutImage from "../images/about2.jpeg";
import Grid from "@mui/material/Grid";
import Whatsapp from "../images/whatsapp.svg";
import Mission from "../images/mision2.jpg";
import Vision from "../images/vision2.jpg";

function About() {
  return (
    <Box
      id="about"
      sx={{
        flexGrow: 1,
        paddingTop: "65px",
        height: "auto",
        display: "block",
        position: "static",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(to bottom, #2c5794, #111e4c);",
          display: "flex",
          justifyContent: "center",
          padding: "25px 25px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "98vw",
              sm: "95w",
              md: "85vw",
              lg: "75vw",
            },
          }}
        >
          <Typography color="white" variant="h4">
            Sobre Nosotros
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          //height: "100vh",
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "98vw",
              sm: "95w",
              md: "85vw",
              lg: "75vw",
            },
            display: "block",
          }}
        >
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  //width: "100%",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "end",
                  },
                }}
              >
                <img className="dim-boy" src={AboutImage} alt="Boys Smile" />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  width: "100%",

                  padding: "10px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "15px",
                    fontSize: {
                      xs: "26px",
                      sm: "26px",
                      md: "28px",
                      lg: "30px",
                    },
                  }}
                >
                  Bienvenido a SportPlus
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "10px",
                    fontSize: {
                      xs: "22px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    },
                  }}
                >
                  ¡Conocenos!{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                    },
                  }}
                >
                  SportPulse combina noticias deportivas en tiempo real,
                  análisis exclusivos, notificaciones personalizadas y una
                  comunidad interactiva, con un enfoque centrado en el usuario
                  para que vivan y sientan el deporte como nunca antes.
                  <br />
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider
            textAlign="center"
            sx={{
              padding: "15px 0 15px 0",
              borderColor: "#0072ff",
              opacity: "0.5",
            }}
          />
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: "15px",
            }}
            container
            spacing={3}
          >
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box>
                <img src={Mission} alt="Boys Smile" />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box
                sx={{
                  width: "100%",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "10px",
                    fontSize: {
                      xs: "22px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    },
                  }}
                >
                  Nuestra Misión{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                    },
                  }}
                >
                  Proveer a los aficionados del deporte una experiencia única y
                  dinámica, donde puedan mantenerse informados sobre sus
                  deportes y equipos favoritos en tiempo real, con contenido
                  relevante y de calidad.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box>
                <img src={Vision} alt="Boys Smile" />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box
                sx={{
                  width: "100%",

                  padding: "10px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "10px",
                    fontSize: {
                      xs: "22px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    },
                  }}
                >
                  Nuestra Visión{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                    },
                  }}
                >
                  Ser la aplicación líder en noticias deportivas personalizadas,
                  ofreciendo contenido actualizado, análisis de expertos,
                  resultados en tiempo real y comunidad interactiva, todo en una
                  única plataforma.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider
            textAlign="center"
            sx={{
              padding: "15px 0 15px 0",
              borderColor: "#0072ff",
              opacity: "0.5",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
