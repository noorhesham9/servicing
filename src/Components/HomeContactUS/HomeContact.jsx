import { Box, Container, Stack, Typography } from "@mui/material";
import FormikContainer from "./FormikContainer";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";
import { IconButton } from "@mui/material";
import { firstContactInfo, secondContactInfo } from "../../Constants";

import { staggerContainer } from "../../utils/motion";
import { createRef, useEffect, useRef, useState } from "react";

// import Button from "@mui/material";

const HomeContact = (Props) => {
  const conatctRef = useRef(null);

  const { name, services, plan, setPlan, contactButton, lang, t } = Props;

  useEffect(() => {
    if (contactButton === undefined || contactButton === false) {
      return;
    } else {
      setTimeout(() => {
        return conatctRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [contactButton]);
  return (
    <Box
      ref={conatctRef}
      name={name}
      id="contacts"
      className=" section__gradient-1"
      py="var(--primary-padding)"
      bgcolor="var(--bg-color)"
      sx={{
        backgroundColor: "#0a1411",
        position: "relative",
      }}>
      <Box
        sx={{
          width: "440px",
          maxWidth: "100%",
          height: "440px",
          background: "rgba(202, 255, 189, 0.4)",
          opacity: 0.4,
          filter: "blur(200px)",
          position: "absolute",
          top: "-2%",
          left: "-5%",
        }}></Box>
      <Typography
        mb={"20px"}
        textAlign={"center"}
        color="var(--title-color)"
        fontSize={{ sm: "50px", xs: "30px" }}
        fontWeight="bold"
        className={` ${lang === "en" ? "english-heading" : " arabic-heading"}`}>
        {t("landingBtnTwo")}
      </Typography>
      <Typography
        sx={{ textAlign: "center", padding: "0px 10px" }}
        className={` ${lang === "en" ? "english-text" : " arabic-text"}`}>
        {t("contactSubTitle")}
      </Typography>
      <Container sx={{ padding: "15px !important" }}>
        <Stack
          sx={{
            backgroundColor: "rgb(202 255 189 / 07%)",
            borderRadius: "20px",
            padding: "10px",
            width: "100%",
            height: "100%",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "35px",
            boxShadow:
              "0 0px 8px 2px rgba(255, 255, 255, 0.08), -1px 0px 2.26765px rgba(255, 255, 255, 0.05) !important",
          }}>
          <Box
            component={motion.div}
            sx={{
              height: "563.500px",
              width: { md: "33.33333333%", xs: "100%" },
              flex: { md: " 0 0 33.33333333%", xs: "0 0 100%" },
            }}
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}>
            <Box
              component={motion.div}
              variants={slideIn("left", "tween", 0.2, 1)}
              sx={{
                Width: "100%",
                height: "563.500px",
              }}
              className="contact__information">
              <Box>
                <Typography
                  className={` headtitle ${
                    lang === "en" ? "english-heading" : " arabic-text"
                  }`}>
                  {t("contactInformation")}
                </Typography>
                <Typography
                  className={` adviceContact ${
                    lang === "en" ? "english-text" : " arabic-text"
                  }`}>
                  {t("contactSubInformation")}
                </Typography>
              </Box>
              <Stack direction="column" className="mailPhoneGPsContainer">
                {firstContactInfo.map((info) => (
                  <Stack
                    className="mailorPhoneorGPs"
                    key={info.id}
                    direction={"row"}>
                    <info.icon sx={{ color: "var(--third-color)" }} />
                    <Typography
                      className="mailorPhoneorGPstext"
                      color="black"
                      herf="#">
                      {info.info}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack
                className="socialcontacts"
                direction="row"
                alignItems="center">
                {secondContactInfo.map((info) => {
                  return (
                    <IconButton key={info.id} href={info.link}>
                      <info.icon sx={{ color: "var(--third-color)" }} />
                    </IconButton>
                  );
                })}
              </Stack>
            </Box>
          </Box>
          <Box
            className="background-Color"
            sx={{
              p: { xs: "20px 5px!important", sm: "20px 22px!important" },
              color: "white",
              width: { md: "66.666666%", xs: "100%" },
              flex: { md: " 0 0 66.666666%", xs: " 0 0 100%" },
            }}>
            {/* <IconButton
              onClick={() => {
                setPaln("On Site");
              }}>
              onsite
            </IconButton>
            <IconButton
              onClick={() => {
                setPaln("On Home");
              }}>
              omHome
            </IconButton> */}
            <FormikContainer
              services={services}
              Plan={plan}
              setPlan={setPlan}
              t={t}
              lang={lang}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomeContact;
