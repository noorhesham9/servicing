import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LInkScroll, Scroll } from "react-scroll";
import { motion, useIsPresent } from "framer-motion";
import { use } from "i18next";
import { useEffect } from "react";
function ServiceCard(Props) {
  const { info, t, lang, setConatctButton } = Props;
  const { icon, title, desc, bOne, bTwo, route } = info;
  const isPresent = useIsPresent();

  // const scrollHandler = () => {
  //   setTimeout(()=>{
  //     ref.current?.scrollIntoView({ behavior: 'smooth' });
  //   },1200)
  // };
  return (
    <Card className="card">
      <CardMedia sx={{ display: "flex", alignSelf: "center", pt: "40px" }}>
        <FontAwesomeIcon
          icon={icon}
          style={{ color: "#2b8b22", fontSize: "50px" }}
          className="icon"
        />
      </CardMedia>
      <Box display="flex" flexDirection="column" alignItems="center">
        <LinkRouter
          to={route}
          className="card-link"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <CardContent>
          <Typography
            fontWeight="bold"
            textAlign="center"
            fontSize={{
              xs: "var(--xs-title-second-font-fontSize)",
              md: "var(--lg-title-second-font-fontSize)",
            }}
            fontFamily="var(--second-font)"
            className={` text ${
              lang === "en" ? "english-heading" : " arabic-heading"
            }`}>
            {t(title)}
          </Typography>
          <Typography
            dir={lang === "en" ? "ltr" : "rtl"}
            textAlign="center"
            fontSize="var( --text-fontSize)"
            className={` text ${
              lang === "en" ? "english-text" : " arabic-text"
            }`}
            py="5px">
            {t(desc)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: "40px",
          }}>
          <LinkRouter to={route}>
            <Button
              className={` btn ${
                lang === "en" ? "english-text" : " arabic-text"
              }`}
              variant="outlined"
              sx={{
                borderColor: "var(--primary-color)",
                color: "white",
                p: "8px 25px",
                textTransform: "capitalize",
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
              }}>
              {t(bOne)}
            </Button>
          </LinkRouter>

          <LinkRouter to={route} onClick={() => setConatctButton(true)}>
            <Button
              className={` btn ${
                lang === "en" ? "english-text" : " arabic-text"
              }`}
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
              }}>
              {t(bTwo)}
            </Button>
          </LinkRouter>
        </CardActions>
      </Box>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.7, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.7, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </Card>
  );
}

export default ServiceCard;
