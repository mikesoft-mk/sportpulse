import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import AboutImage from "../images/about.jpg";
import Grid from "@mui/material/Grid";
import Whatsapp from "../images/whatsapp.svg";
import Endodoncia from "../images/Noticias.jpg";
import Ortodoncia from "../images/notificacion.jpg";
import Protesis from "../images/analisis.png";
import Blanqueamiento from "../images/videos.jpg";
import Implantes from "../images/cobertura.jpg";
import Cirugia from "../images/redes.webp";

function Services() {
  const styles = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  };
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true); // Cambia el estado cuando el cursor entra
    console.log("Display: " + visible);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setHovered(false); // Cambia el estado cuando el cursor sale
    console.log("Display: " + visible);
    setVisible(false);
  };
  return (
    <Box id="services" sx={{ flexGrow: 1, paddingTop: "65px" }}>
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
            Nuestros Servicios
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
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: "15px",
            }}
            container
            spacing={3}
          >
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img
                    className="dim-images"
                    src={Endodoncia}
                    alt="Boys Smile"
                  />
                  <Typography className="efect-text">
                    Actualizaciones al minuto de todos los deportes, desde
                    fútbol hasta deportes menos populares.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  NOTICIAS EN TIEMPO REAL
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Ortodoncia} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Alerta sobre goles, partidos, resultados y noticias sobre
                    tus equipos o deportistas favoritos.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  NOTIFICACIONES PERSONALIZADAS
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Protesis} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Opiniones de expertos, análisis tácticos y artículos
                    profundos.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  ANÁLISIS Y ARTÍCULOS EXCLUSIVOS
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Blanqueamiento} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Contenido multimedia con resúmenes, entrevistas y momentos
                    destacados.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  VIDEOS Y HIGHLIGHTS
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Implantes} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Seguimiento minuto a minuto de partidos, campeonatos y
                    torneos en curso.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  COBERTURA DE EVENTOS EN VIVO
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <Box sx={{ border: "1px solid #90caf9" }}>
                <Box className="animacion-imagen">
                  <img src={Cirugia} alt="Boys Smile" />
                  <Typography className="efect-text">
                    Espacios para que los usuarios interactúen, discutan y
                    compartan su pasión por el deporte.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...styles,
                  }}
                >
                  RED SOCIAL DEPORTIVA
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

export default Services;
