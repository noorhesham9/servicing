import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import { infoCard } from "../../Constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Box
      sx={{ bgcolor: "#0a1411" }}
      p="50px 0  0"
      borderTop="1px solid rgb(202 255 189 / 9%);">
      <Container>
        <Box
          pb="50px"
          className="footer"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", md: "row" }}>
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
              color="white"
              textAlign="center"
              pb={{ xs: "20px", md: "0" }}>
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
              direction={{ xs: "column", sm: "row" }}
              flexWrap="wrap"
              justifyContent="center">
              {infoCard.map((info) => (
                <Stack
                  alignItems="center"
                  direction="row"
                  key={info.id}
                  flexBasis={{ lg: "33%", md: "44%", xs: "100%", sm: "33%" }}>
                  <IconButton>
                    <ArrowForwardIcon sx={{ color: "var(--third-color)" }} />
                  </IconButton>
                  <Link to={info.route}>
                    <Button
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        "&:hover": { color: "var(--primary-color)" },
                      }}>
                      {info.title}
                    </Button>
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
      <Box sx={{ borderTop: "1px solid rgb(202 255 189 / 9%);", p: "25px" }}>
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
