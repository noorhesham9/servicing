import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import ContactInfo from "./ContactInfo";
import { infoCard } from "../../Constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0a1411",
        position: "relative",
      }}>
      <Box
        sx={{
          width: "350px",
          height: "350px",
          background: "rgba(202, 255, 189, 0.4)",
          opacity: 0.4,
          filter: "blur(200px)",
          position: "absolute",
          top: "-5%",
          left: "-5%",
        }}></Box>
      <Container>
        <Box
          p="20px"
          className="footer"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", sm: "row" }}>
          <Stack className="box">
            <Typography
              className="title"
              fontSize={{
                xs: "var(--xs-title-second-font-fontSize)",
                md: "var(--lg-title-second-font-fontSize)",
              }}>
              logo
            </Typography>
            <Typography
              fontSize="14px"
              color="black"
              textAlign={{ xs: "center", sm: "start" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus facere modi possimus dignissimos, aliquam nobis
              eaque? Voluptatem magnam quisquam rem.
            </Typography>
          </Stack>
          <Stack className="box">
            <Typography
              className="title"
              fontSize={{
                xs: "var(--xs-title-second-font-fontSize)",
                md: "var(--lg-title-second-font-fontSize)",
              }}>
              Services
            </Typography>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              flexWrap="wrap"
              justifyContent="space-between">
              {infoCard.map((info) => (
                <Stack key={info.id} alignItems="center" direction="row">
                  <IconButton>
                    <ArrowForwardIcon sx={{ color: "var(--third-color)" }} />
                  </IconButton>
                  <Button
                    href="#"
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      "&:hover": { color: "var(--primary-color)" },
                    }}>
                    {info.title}
                  </Button>
                </Stack>
              ))}
            </Stack>
          </Stack>
          {/* <Stack className="box">
            <Typography
              className="title"
              fontSize={{
                xs: "var(--xs-title-fontSize)",
                md: "var(--lg-title-fontSize)",
              }}>
              About
            </Typography>
          </Stack> */}
          <ContactInfo />
        </Box>
      </Container>
      <Box sx={{ borderTop: "1px solid var(--primary-color)", p: "20px" }}>
        <Typography color="black" textAlign="center">
          © 2023 All Right Reserved Created by:{" "}
          <a
            href="https://q-blink.netlify.app/#home"
            target="blank"
            style={{ color: "var(--third-color)" }}>
            Q-Blink
          </a>{" "}
          Company
        </Typography>
      </Box>
    </Box>
  );
}
//  nice to meet you مينجالابا
export default Footer;
