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
    <Box sx={{ bgcolor: "#0a1411" }}>
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
            <Typography color="white" textAlign={{ xs: "center", sm: "start" }}>
              As a service company, we fix your problems. We provide a wide
              range of services for laptops, computers, home repairs, and
              electrical devices, catering to all your needs
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
                      color: "white",
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
        <Typography color="white" textAlign="center">
          © 2023 All Right Reserved | Created by:{" "}
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
