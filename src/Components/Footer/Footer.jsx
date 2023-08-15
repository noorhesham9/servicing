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
function Footer(Props) {
  const { t, lang, setConatctButton } = Props;
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
              className={` title ${
                lang === "en" ? "english-text" : " arabic-text"
              }`}
              pb={{ xs: "20px", md: "0" }}>
              {t("WebsiteDescriptionFooter")}
            </Typography>
          </Stack>
          <Stack className="box">
            <Typography
              className={` title ${
                lang === "en" ? "english-text" : " arabic-text"
              }`}
              fontSize={{
                xs: "var(--xs-title-second-font-fontSize)",
                md: "var(--lg-title-second-font-fontSize)",
              }}>
              {t("landingBtnOne")}
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
                  <Link
                    onClick={() => {
                      setConatctButton(false);
                    }}
                    to={info.route}>
                    <Button
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        "&:hover": { color: "var(--primary-color)" },
                      }}
                      className={` ${
                        lang === "en" ? "english-text" : " arabic-text"
                      }`}>
                      {t(info.title)}
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
