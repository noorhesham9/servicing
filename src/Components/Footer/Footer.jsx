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
    <Box sx={{ bgcolor: "rgb(240, 247, 241)" }}>
      <Container>
        <Box
          p="20px"
          className="footer"
          display="flex"
          justifyContent="space-between">
          <Stack className="box">
            <Typography
              className="title"
              fontSize={{
                xs: "var(--xs-title-second-font-fontSize)",
                md: "var(--lg-title-second-font-fontSize)",
              }}>
              logo
            </Typography>
            <Typography fontSize="14px" color="black">
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
        <Typography color="black">
          © 2023 Created by: Q-Blink Developers
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
