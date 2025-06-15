import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../css/styles.css";
import useIntersection from "../class/useIntersection";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TrendingUp } from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "animate.css";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import Banner1 from "../images/Banner1.png";
import Banner2 from "../images/Banner2.png";
import Banner3 from "../images/Banner3.jpg";
import modelo from "../images/Modelo1.png";
import Man from "../images/Man.png";
import Logosf from "../images/logo-sin-fondo.png";

import About from "./About";
import Services from "./Services";
import Appointment from "./Appointment";
import Footer from "./Footer";

function SampleArrow() {
  return <div style={{ display: "none" }} />;
}

function Home() {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar la diapositiva activa

  return (
    <Box>
      <Box
        sx={{
          padding: "0",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/*
          <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          speed={800}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Detecta el cambio de diapositiva
        >
<SwiperSlide>
            <div>
              <img
                src={Banner1}
                alt="slide 1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={Banner2}
                alt="slide 2"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <h2
                className={
                  activeIndex === 1
                    ? "animate__animated animate__fadeInLeft "
                    : "banner-desactive"
                }
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "10%",
                  fontSize: "2vw",
                  color: "white",
                }}
              >
                Nos enfocamos en crear sonrisas saludables
                <br />y hermosas en un ambiente cómodo y moderno.
              </h2>
            </div>
          </SwiperSlide>
           </Swiper>
          */}

        <div style={{ position: "relative" }}>
          <img
            src={Banner3}
            alt="slide 3"
            style={{ width: "100vw", height: "80vh", objectFit: "cover" }}
          />
          <div
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "center",
            }}
          >
            <img
              src={Logosf}
              alt="logo"
              className="animate__animated animate__fadeInUp img-logo"
            />
          </div>
        </div>
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Services />
      </Box>
      <Box>
        <Appointment />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
