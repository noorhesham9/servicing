import { Box, Container, Stack, Typography } from "@mui/material";
import FormikContainer from "./FormikContainer";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc/index";
import SocialMedia from "./SocialMedia";
import { Shape } from "../../Constants";

// const socailmedia=[
//     {
//         name:'GitHub',
//         icon:GitHub
//     },
//     {
//         name:'LinkedIn',
//         icon:LinkedIn
//     },
//     {
//         name:'GitHub',
//         icon:Twitter
//     },
//     {
//         name:'WhatsApp',
//         icon:WhatsApp
//     },
//     {
//         name:'InstagramIcon',
//         icon:Instagram
//     },
//     {

//     }
// ]

const Contact = () => {
  return (
    <Box id="contacts" className=" section__gradient-1" py="100px">
      <Typography
        mb={"20px"}
        textAlign={"center"}
        color="var(--title-color)"
        fontSize={{ sm: "50px", xs: "30px" }}
        fontWeight="bold"
        fontFamily="var(--second-font)">
        <span style={{ color: "var(--primary-color)" }}>Contact</span> US
      </Typography>
      <Container>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            justifyContent="center"
            alignItems={"center"}
            gap={{ xs: "20px", sm: "10px" }}>
            <SocialMedia />
            <Box
              className="background-Color"
              sx={{
                bgcolor: "var(--container-color)",
                p: "35px 30px!important",
                color: "white",
                width: "100%",
                maxWidth: "450px!important",
                borderRadius: "10px",
              }}>
              <Stack sx={{ textAlign: { xs: "center", sm: "start" } }}>
                <motion.div variants={textVariant()}>
                  <Typography color="var(--text-color)">
                    GET IN TOUCH
                  </Typography>
                </motion.div>
              </Stack>
              <FormikContainer />
            </Box>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SectionWrapper(Contact);
