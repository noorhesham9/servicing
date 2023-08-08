import { Box, Container, IconButton, List, ListItem } from "@mui/material";
import { Link } from "react-scroll";
import "./header.css";
import { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
const Header = () => {
  const [themeWhite, setThemeWhite] = useState(true);
  const [langEnglish, setLangEnglish] = useState(true);
  const ThemeHandler = () => {
    setThemeWhite(!themeWhite);
  };
  const langHandler = () => {
    setLangEnglish(!langEnglish);
  };
  return (
    <Box
      width={"100%"}
      borderRadius={"10px"}
      className="header"
      position={"fixed"}
      sx={{
        transition: "var(--transition)",
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        height: "75px",
      }}>
      <Container
        className="flex spaceBetween "
        sx={{
          height: "100%",
          alignItems: "center",
        }}>
        <Link to="#home" className="logo">
          Logo
        </Link>

        <Box
          sx={{
            gap: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "--title-color",
          }}>
          <List
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              letterSpacing: "0.6px",
            }}>
            <ListItem>
              <Link className="homeLink_nav linknav" to="#home">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link className="servicesLink_nav linknav" to="#services">
                Services
              </Link>
            </ListItem>
            <ListItem>
              <Link className="contactusLink_nav linknav" to="#contactus">
                ContactUS
              </Link>
            </ListItem>
          </List>
          <IconButton
            onClick={langHandler}
            sx={{
              color: "var(--button-color)",
              fontFamily: "var(--second-font)",
              backgroundColor: "var(--primary-color)",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "var(--transition)",
              boxShadow: "1.5px 1.5px var(--primary-color-shadow)",
              "&:hover": {
                color: "var(--title-color)",
                backgroundColor: "transparent",
              },
            }}>
            {langEnglish ? "EN" : "AR"}
          </IconButton>
          <IconButton
            onClick={ThemeHandler}
            sx={{
              boxShadow: "1.5px 1.5px var(--primary-color-shadow)",
              color: "var(--button-color)",
              fontFamily: "var(--second-font)",
              backgroundColor: "var(--primary-color)",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "var(--transition)",
              "&:hover": {
                color: "var(--title-color)",
                backgroundColor: "transparent",
              },
            }}>
            {themeWhite ? <WbSunnyIcon /> : <Brightness3Icon />}
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
