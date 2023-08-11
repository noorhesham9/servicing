import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import { infoPlanCard } from "../../Constants";
import PlanCard from "./PlanCard";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
function Plan() {
  return (
    <Box
      id="plan"
      className="section__gradient-2"
      py="var(--primary-padding)"
      bgcolor="var(--bg-color)">
      <Container className="containerforAbout">
        <motion.div variants={textVariant()}>
          <Typography
            className="AboutUS"
            sx={{
              textAlign: "center",
              marginBottom: "20px",

              fontSize: { sm: "50px", xs: "30px" },
              fontWeight: "bold",
              fontFamily: "var(--second-font)",
              color: "var(--text-color)",
            }}>
            Choose your Plan
          </Typography>
        </motion.div>
        <Grid container spacing={2}>
          {infoPlanCard.map((info) => (
            <Grid
              item
              key={info.id}
              xs={12}
              sm={6}
              //   sx={{
              //     display: "flex",
              //     flexDirection: "column",
              //     textAlign: "center",
              //   }}
            >
              <PlanCard info={info} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionWrapper(Plan, "about");
