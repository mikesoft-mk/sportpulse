import theme from "./theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Divider, ThemeProvider, Typography } from "@mui/material";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Banner from "./components/Banner";
const navArrayLinks = [
  {
    title: "Inicio",
    path: "/",
    icon: <MenuIcon color="success" />,
  },
];
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Banner />
        <Divider />
        <AppBar
          position="sticky"
          style={{
            //height: "auto",
            top: "0px",
            boxShadow: "none",
            transition: "background-color 0.2s ease, height 0.2s ease",
          }}
        >
          <NavBar navArrayLinks={navArrayLinks} />
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
