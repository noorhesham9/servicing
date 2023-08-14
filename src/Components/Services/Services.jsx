import { Grid, Box, Container, Typography } from "@mui/material";
import { infoCard } from "../../Constants";
import ServiceCard from "./Card";
import { motion } from "framer-motion";
import { Logolanding } from "../../utils/motion";

function Services(Props) {
  const { t, lang } = Props;
  return (
    <Box
      name="services"
      sx={{
        backgroundColor: "#0a1411",
      }}
      py={"var(--primary-padding)"}>
      <Container>
        <Typography
          className={` head-title ${
            lang ? "english-heading" : " arabic-heading"
          }`}
          component={motion.p}
          initial={Logolanding().hidden}
          animate={Logolanding().show}>
          {t("landingBtnOne")}
        </Typography>
        <Typography
          textAlign="center"
          color="rgb(250,250,250,.6)"
          fontSize="24"
          mb="20px"
          className={` ${lang ? "english-text" : " arabic-text"}`}>
          {t("servicesPlaces")}
          <span style={{ color: "white", fontWeight: "bold" }}>
            {t("placeOne")}
          </span>{" "}
          {t("andWordPlaceServices")}{" "}
          <span style={{ color: "white", fontWeight: "bold" }}>
            {" "}
            {t("placeTwo")}
          </span>
        </Typography>
        <Grid container spacing={2}>
          {infoCard.map((info) => (
            <Grid
              item
              key={info.id}
              xs={12}
              md={4}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}>
              <ServiceCard info={info} t={t} lang={lang} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
