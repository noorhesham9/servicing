import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ButtonLAnding, Logolanding } from "../../utils/motion";

function SubLanding(Props) {
  const { title, img } = Props;

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
          className="head-title"
          component={motion.p}
          initial={Logolanding().hidden}
          animate={Logolanding().show}>
          {title}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          component={motion.div}
          initial={ButtonLAnding(0.25).hidden}
          animate={ButtonLAnding(0.25).show}>
          <Link to="/" className="link">
            Home
          </Link>{" "}
          |{" "}
          <Typography className="link" color="rgb(250,250,250,.6)">
            {title}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SubLanding;