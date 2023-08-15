import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import { ButtonLAnding, Logolanding } from "../../utils/motion";

function SubLanding(Props) {
  const { title, img, lang, t } = Props;
  const isPresent = useIsPresent();
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        position: "relative",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <Box className="layer"></Box>
      <Stack alignItems="center">
        <Typography
          component={motion.p}
          initial={Logolanding().hidden}
          animate={Logolanding().show}
          className={` head-title ${
            lang ? "english-heading" : " arabic-heading"
          }`}>
          {t(title)}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          component={motion.div}
          initial={ButtonLAnding(0.25).hidden}
          animate={ButtonLAnding(0.25).show}
          className={`${lang ? "english-text" : " arabic-text"}`}>
          <Typography className="link" color="rgb(250,250,250,.6)">
            <Link to="/" className="link">
              {t("home")}
            </Link>
          </Typography>

          {" | "}
          <Typography
            color="rgb(250,250,250,.6)"
            className={` link ${lang ? "english-text" : " arabic-text"}`}>
            {t(title)}
          </Typography>
        </Stack>
      </Stack>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.7, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.7, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </Box>
  );
}

export default SubLanding;
