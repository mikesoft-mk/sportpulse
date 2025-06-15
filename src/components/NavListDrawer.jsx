import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Whatsapp from "../images/whatsapp.svg";
import Maps from "../images/maps.svg";

function NavListDrawer() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const sections = ["home", "about", "services", "appointment"];
  const handleScroll = () => {
    const scrollPosition = window.scrollY - 200; // Ajuste opcional para el desplazamiento
    const sectionOffsets = sections.map((sectionId) => {
      const section = document.getElementById(sectionId);
      return {
        id: sectionId,
        offset: section ? section.offsetTop : 0,
      };
    });

    const currentSection = sectionOffsets.find(
      (section) => scrollPosition <= section.offset
    );

    if (currentSection) {
      setValue(sections.indexOf(currentSection.id));
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId, index) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const openWhatsapp = () => {
    window.open("https://wa.me/73222066", "_blank");
  };
  const openMaps = () => {
    window.open("https://maps.app.goo.gl/DeqMiyJ9dzsr3ZbA6", "_blank");
  };
  return (
    <Box sx={{ display: "block" }}>
      {["right"].map((anchor) => (
        <React.Fragment key="right">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <MenuIcon
              fontSize="large"
              color="secondary"
              onClick={handleToggle}
            />
          </Box>
          <Collapse
            in={open}
            anchor="top"
            sx={{ background: "#00d8e7", height: "0", position: "absolute" }}
          >
            <Box
              sx={{
                display: "flex",
                position: "relative",
                width: "93vw",
                height: "0",
                transition: "position 0.5s ease",
              }}
            >
              <List value={value}>
                <ListItemButton
                  onClick={() => {
                    handleToggle();
                    scrollToSection("home");
                  }}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#ffffff" }}
                      label="Inicio"
                      primary="Inicio"
                    />
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    handleToggle();
                    scrollToSection("about");
                  }}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#ffffff" }}
                      label="Sobre Nosotros"
                      primary="Sobre Nosotros"
                    />
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    scrollToSection("services");
                    handleToggle();
                  }}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#ffffff" }}
                      label="Servicios"
                      primary="Servicios"
                    />
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    scrollToSection("appointment");
                    handleToggle();
                  }}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#ffffff" }}
                      label="Citas"
                      primary="Citas"
                    />
                  </ListItem>
                </ListItemButton>
              </List>
            </Box>
          </Collapse>
        </React.Fragment>
      ))}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          //width: "100vw",
          justifyContent: "right",
          paddingRight: "25px",
          top: "0",
          right: "0",
        }}
      >
        <IconButton
          sx={{ width: "50px", height: "50px", margin: "0 15px" }}
          onClick={openWhatsapp}
        >
          <img className="dim-whatsapp" src={Whatsapp} alt="Whatsapp" />
        </IconButton>
        <IconButton sx={{ width: "50px", height: "50px" }} onClick={openMaps}>
          <img className="dim-whatsapp" src={Maps} alt="Maps" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default NavListDrawer;
