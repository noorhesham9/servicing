import { Box, Button, Container, Typography } from "@mui/material";
import "./landing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectFade } from "swiper/modules";
import nn from "../../assets/tree-736885_1280.jpg";
import mm from "../../assets/digital_camera_photo-1080x675.jpg";
import image1 from "../../assets/1 (1).jpg";
import image2 from "../../assets/1 (2).jpg";
import imag3 from "../../assets/1 (3).jpg";
import landingShabe from "../../assets/blob-scene-haikei.svg";

import {
  Logolanding,
  ButtonLAnding,
  SwiperVariant,
  zoomInlanding1,
  zoomInlanding2,
  zoomInlanding3,
} from "../../utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "swiper/css/effect-fade";

const data = [
  {
    id: 1,
    image: nn,
    title: "maintainence",
    initial: () => {
      return zoomInlanding1().hidden;
    },
    animate: () => {
      return zoomInlanding1().show;
    },
  },
  {
    id: 2,
    image: mm,
    title: "phone",
    initial: () => {
      return zoomInlanding2().hidden;
    },
    animate: () => {
      return zoomInlanding2().show;
    },
  },
  {
    id: 3,
    image: image1,
    title: "fridge",
    initial: () => {
      return zoomInlanding3().hidden;
    },
    animate: () => {
      return zoomInlanding3().show;
    },
  },
  {
    id: 4,
    image: image2,
    title: "washing machine",
    initial: () => {
      return zoomInlanding1().hidden;
    },
    animate: () => {
      return zoomInlanding1().show;
    },
  },
  {
    id: 5,
    image: imag3,
    title: "screens",
    initial: () => {
      return zoomInlanding2().hidden;
    },
    animate: () => {
      return zoomInlanding2().show;
    },
  },
  {
    id: 6,
    image: imag3,
    title: "screens",
    initial: () => {
      return zoomInlanding3().hidden;
    },
    animate: () => {
      return zoomInlanding3().show;
    },
  },
];

// const swiper = new Swiper(".swiper", {
//   zoom: {
//     maxRatio: 5,
//   },
// });
// console.log(swiper.animating);

const Landing = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${landingShabe})`,
        backgroundSize: "cover",
      }}
      height={"100vh"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      className="landing">
      <Container className="flex contianerLanding">
        <Swiper
          className="flex contianerLanding"
          effect="fade"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, EffectFade]}>
          {data.map(({ id, image, title, initial, animate }) => {
            return (
              <SwiperSlide key={id} className="flex contianerLanding">
                {({ isActive }) => {
                  return (
                    <>
                      {isActive ? (
                        <Box className="flex contianerLanding">
                          <Box
                            sx={{
                              flex: "0 0 50%",
                            }}>
                            <Typography
                              className="logoLAnding"
                              component={motion.p}
                              initial={Logolanding().hidden}
                              animate={Logolanding().show}
                              sx={{
                                textShadow: "var(--textShdowLanding)",
                              }}>
                              Logo
                            </Typography>
                            <Typography
                              component={motion.p}
                              initial={ButtonLAnding(0.25).hidden}
                              animate={ButtonLAnding(0.25).show}
                              className="title">
                              {title}
                            </Typography>
                            <Typography
                              component={motion.p}
                              initial={ButtonLAnding(0.5).hidden}
                              animate={ButtonLAnding(0.5).show}
                              className="brief">
                              Instead of waiting weeks, now you can lock a rate,
                              share some financial info, and get a loan
                              Commitment Letter within the next
                            </Typography>
                            <Box
                              sx={{
                                paddingTop: "15px",
                                display: "flex",
                                justifyContent: "flex-start",
                                gap: "25px",
                              }}>
                              <Button
                                component={motion.div}
                                initial={ButtonLAnding(0.75).hidden}
                                animate={ButtonLAnding(0.75).show}
                                className="servicesButtonLanding">
                                <Link to="#services">Services</Link>
                              </Button>
                              <Button
                                component={motion.div}
                                initial={ButtonLAnding(0.75).hidden}
                                animate={ButtonLAnding(0.75).show}
                                className="contactButtonLanding">
                                <Link to="#contact">Contact Us</Link>
                              </Button>
                            </Box>
                          </Box>

                          <Box
                            component={motion.div}
                            initial={initial}
                            animate={animate}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              flex: "0 0 50%",
                              maxWidth: "300px",
                              height: "300px",
                              overflow: "hidden",
                              border: "5px solid black",
                            }}>
                            <motion.img
                              initial={SwiperVariant().hidden}
                              animate={SwiperVariant().show}
                              style={{
                                backgroundSize: "cover",
                                height: "100%",
                                backgroundPosition: "center",
                              }}
                              src={image}
                              alt=""
                            />
                          </Box>
                        </Box>
                      ) : (
                        ""
                      )}
                    </>
                  );
                }}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Landing;

{
  /* <AnimatePresence>
            <Box key={"33"}>
              <Typography
                component={motion.p}
                variants={textVariant}
                initial="hidden"
                animate="show"
                // exit="hidden"
              >
                Logo
              </Typography>
              <Typography component={motion.p}>laptop</Typography>
              <Typography component={motion.p}>
                Instead of waiting weeks, now you can lock a rate, share some
                financial info, and get a loan Commitment Letter within
              </Typography>
            </Box>
            <Box
              sx={{
                height: "400px",
                width: "300px",
                backgroundSize: "cover",
                overflow: "hidden",
              }}>
              <motion.img
                style={{
                  height: "100%",
                  // width: "100%",
                  maxWidth: "100%",

                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className=""
                key={page}
                src={images[imageIndex]}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              />
            </Box>
          </AnimatePresence> 
          <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          {"‣"}
        </div>
        <motion.div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}></motion.div>
export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

  const [page, setPage] = useState(0);


        */
}

{
  /* <Swiper
        effect="fade"
        speed="1000"
        parallax="true"
        draggable
        pagination={{
          clickable: true,
        }}
        style={{
          position: "relative",
          color: "red",
          height: "100%",
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}>
        <SwiperSlide>
          <img src={nn} alt="" />
          <motion.Box variants={textVariant}>Slide1</motion.Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mm} alt="" />

          <motion.Box variants={textVariant}>Slide2</motion.Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nn} alt="" />

          <motion.Box>Slide3</motion.Box>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ zIndex: "-1" }} src={mm} alt="" />

          <motion.Box>Slide3</motion.Box>
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <motion.div
              style={{ position: "absolute" }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: isActive ? 1 : 0,
                transition: {
                  duration: 0.4,
                  delay: 1,
                },
              }}>
              slide 4
            </motion.div>
          )}
        </SwiperSlide>
      </Swiper> */
}
