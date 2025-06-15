import {
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import NavListDrawer from "./NavListDrawer";
import Home from "./Home";
import Whatsapp from "../images/whatsapp.svg";
import Maps from "../images/maps.svg";

function Navbar(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const sections = ["home", "about", "services", "appointment"];
  const handleScroll = () => {
    const scrollPosition = window.scrollY - 200; // Ajuste opcional para el desplazamiento
    const sectionOffsets = sections.map((sectionId) => {
      const section = document.getElementById(sectionId);
      return {
        id: sectionId,
        offset: section ? section.offsetTop : 1,
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
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const openWhatsapp = () => {
    window.open("https://wa.me/59172045495", "_blank");
  };
  const openMaps = () => {
    window.open("https://maps.app.goo.gl/dF99Qkdq6yVDgfGc6", "_blank");
  };

  return (
    <Box
      sx={{
        //background: "green",
        display: "inline-block",
        height: "auto",
        //transition: "display 0.5s ease, height 0.5s ease",
      }}
    >
      <Toolbar variant="dense">
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "inline-block",
            },
            padding: "10px",
            width: "100%",
            height: "75px",
            transition: "height 0.5s ease",

            //background: "red",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="secondary"
            textColor="secondary"
            sx={{
              height: "100%",
              alignItems: "center",
            }}
          >
            <Tab
              sx={{ color: "#000000" }}
              label="Inicio"
              onClick={() => scrollToSection("home")}
            />
            <Tab
              sx={{ color: "#000000" }}
              label="Sobre Nosotros"
              onClick={() => scrollToSection("about")}
            />
            <Tab
              sx={{ color: "#000000" }}
              label="Servicios"
              onClick={() => scrollToSection("services")}
            />
            <Tab
              sx={{ color: "#000000" }}
              label="Contactos"
              onClick={() => scrollToSection("appointment")}
            />
            <IconButton
              sx={{ width: "50px", height: "50px", margin: "0 15px" }}
              onClick={openWhatsapp}
            >
              <img className="dim-whatsapp" src={Whatsapp} alt="Whatsapp" />
            </IconButton>
            <IconButton
              sx={{ width: "50px", height: "50px" }}
              onClick={openMaps}
            >
              <img className="dim-whatsapp" src={Maps} alt="Maps" />
            </IconButton>
          </Tabs>
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
            },

            //padding: "10px",
            //position: "absolute",
          }}
        >
          <NavListDrawer />
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Navbar;
