import { Box, Button, Container, Typography } from "@mui/material";
import "./landing2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectFade } from "swiper/modules";
import nn from "../../assets/tree-736885_1280.jpg";
import mm from "../../assets/digital_camera_photo-1080x675.jpg";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import imag3 from "../../assets/3.jpg";
import landingShabe from "../../assets/blob-scene-haikei.svg";
import {
  Logolanding,
  ButtonLAnding,
  SwiperVariant,
  zoomInlanding1,
  zoomInlanding2,
  zoomInlanding3,
} from "../../utils/motion";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-scroll";
import "swiper/css/effect-fade";

// const data = [
//   {
//     id: 1,
//     image: nn,
//     title: "maintainence",
//     color: "#0a1411",
//     initial: () => {
//       return zoomInlanding1().hidden;
//     },
//     animate: () => {
//       return zoomInlanding1().show;
//     },
//   },
//   {
//     id: 2,
//     image: mm,
//     title: "website macker",
//     color: "#0a1411",
//     initial: () => {
//       return zoomInlanding2().hidden;
//     },
//     animate: () => {
//       return zoomInlanding2().show;
//     },
//   },
//   {
//     id: 3,
//     image: image1,
//     color: "#0a1411",
//     title: "fridge",
//     initial: () => {
//       return zoomInlanding3().hidden;
//     },
//     animate: () => {
//       return zoomInlanding3().show;
//     },
//   },
//   {
//     id: 4,
//     image: image2,
//     title: "washing machine",
//     color: "#0a1411",
//     initial: () => {
//       return zoomInlanding1().hidden;
//     },
//     animate: () => {
//       return zoomInlanding1().show;
//     },
//   },
//   {
//     id: 5,
//     image: imag3,
//     title: "screens",
//     color: "#0a1411",
//     initial: () => {
//       return zoomInlanding2().hidden;
//     },
//     animate: () => {
//       return zoomInlanding2().show;
//     },
//   },
//   {
//     id: 6,
//     image: imag3,
//     title: "screens",
//     initial: () => {
//       return zoomInlanding3().hidden;
//     },
//     animate: () => {
//       return zoomInlanding3().show;
//     },
//   },
// ];

const Landing2 = (Props) => {
  const { t, lang } = Props;
  return (
    <Box
      name="home"
      sx={{
        backgroundColor: `#0a1411`,
        position: "relative",
      }}
      height={"100vh"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      className="landing">
      <Box
        sx={{
          width: { xs: "0px", sm: "440px" },
          height: "440px",
          background: "rgba(202, 255, 189, 0.4)",
          opacity: 0.4,
          filter: "blur(200px)",
          position: "absolute",
          top: "-2%",
          left: "-5%",
        }}></Box>
      <Container
        sx={{
          height: "100%",
        }}>
        <Box className="flex contianerLanding">
          <Box
            sx={{
              maxWidth: "670px",
              textAlign: "center",
            }}>
            <Typography
              className="logoLAnding"
              component={motion.p}
              initial={Logolanding().hidden}
              animate={Logolanding().show}
              sx={{
                textShadow: "var(--textShdowLanding)",
              }}>
              Seervo
            </Typography>
            <Typography
              component={motion.p}
              initial={ButtonLAnding(0.25).hidden}
              animate={ButtonLAnding(0.25).show}
              // className="title"
              className={` title ${
                lang === "en" ? "english-text  " : "arabic-heading "
              }`}>
              {t("title")}
            </Typography>
            <Typography
              component={motion.p}
              initial={ButtonLAnding(0.5).hidden}
              animate={ButtonLAnding(0.5).show}
              fontSize={lang === "en" ? "18px" : "24px"}
              className={` brief ${
                lang === "en" ? "english-text" : " arabic-text"
              }`}>
              {t("WebsiteDescriptionLanding")}
            </Typography>
            <Box
              sx={{
                flexWrap: "wrap",
                paddingTop: "15px",
                display: "flex",
                width: "100%",
                justifyContent: "center",
                gap: "25px",
                maxWidth: "100%",
              }}>
              <Link smooth={true} duration={800} to="services">
                <Button
                  component={motion.div}
                  initial={ButtonLAnding(0.75).hidden}
                  animate={ButtonLAnding(0.75).show}
                  // className="servicesButtonLanding"
                  className={` servicesButtonLanding ${
                    lang === "en" ? "english-heading  " : "arabic-text "
                  }`}>
                  {t("landingBtnOne")}
                </Button>
              </Link>
              <Link smooth={true} duration={800} to="contactus">
                <Button
                  component={motion.div}
                  initial={ButtonLAnding(0.75).hidden}
                  animate={ButtonLAnding(0.75).show}
                  // className="contactButtonLanding"
                  className={` contactButtonLanding ${
                    lang === "en" ? "english-heading  " : "arabic-text "
                  }`}>
                  {t("landingBtnTwo")}
                </Button>{" "}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Landing2;
// className={` ListItemServices desktopnavservice  ${
//   lang ? "english-text  " : "arabic-text "
// }`}

// <Swiper
// className="flex contianerLanding"
// slidesPerView={1}
// effect="fade"
// pagination={{
//   clickable: true,
// }}
// modules={[Pagination, EffectFade]}>
// {data.map(({ id, image, title, initial, animate, color }) => {
//   return (
//     <SwiperSlide key={id} className="flex contianerLanding">
//       {({ isActive }) => {
//         return (
//           <>
//             <Box
//               sx={{
//                 backgroundColor: `${color}`,
//               }}
//               className="flex contianerLanding">
//               {isActive ? (
//                 <Box
//                   sx={{
//                     flex: "0 0 50%",
//                     textAlign: "center",
//                   }}>
//                   <Typography
//                     className="logoLAnding"
//                     component={motion.p}
//                     initial={Logolanding().hidden}
//                     animate={Logolanding().show}
//                     sx={{
//                       textShadow: "var(--textShdowLanding)",
//                     }}>
//                     Servo
//                   </Typography>
//                   <Typography
//                     component={motion.p}
//                     initial={ButtonLAnding(0.25).hidden}
//                     animate={ButtonLAnding(0.25).show}
//                     className="title">
//                     {title}
//                   </Typography>
//                   <Typography
//                     component={motion.p}
//                     initial={ButtonLAnding(0.5).hidden}
//                     animate={ButtonLAnding(0.5).show}
//                     className="brief">
//                     Instead of waiting weeks, now you can lock a rate,
//                     share some financial info, and get a loan Commitment
//                     Letter within the next
//                   </Typography>
//                   <Box
//                     sx={{
//                       paddingTop: "15px",
//                       display: "flex",
//                       justifyContent: "center",
//                       gap: "25px",
//                     }}>
//                     <Button
//                       component={motion.div}
//                       initial={ButtonLAnding(0.75).hidden}
//                       animate={ButtonLAnding(0.75).show}
//                       className="servicesButtonLanding">
//                       <Link to="#services">Services</Link>
//                     </Button>
//                     <Button
//                       component={motion.div}
//                       initial={ButtonLAnding(0.75).hidden}
//                       animate={ButtonLAnding(0.75).show}
//                       className="contactButtonLanding">
//                       <Link to="#contact">Contact Us</Link>
//                     </Button>
//                   </Box>
//                 </Box>
//               ) : (
//                 ""
//               )}

//               <Box
//                     component={motion.div}
//                     initial={initial}
//                     animate={animate}
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       flex: "0 0 50%",
//                       maxWidth: "300px",
//                       height: "300px",
//                       overflow: "hidden",
//                       border: "5px solid black",
//                     }}>
//                     <motion.img
//                       initial={SwiperVariant().hidden}
//                       animate={SwiperVariant().show}
//                       style={{
//                         backgroundSize: "cover",
//                         height: "100%",
//                         backgroundPosition: "center",
//                       }}
//                       src={image}
//                       alt=""
//                     />
//                   </Box>
//             </Box>
//           </>
//         );
//       }}
//     </SwiperSlide>
//   );
// })}
// </Swiper>
