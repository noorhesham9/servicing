import { Grid, Box, Container, Typography } from "@mui/material";
import { infoCard } from "../../Constants";
import ServiceCard from "./Card";
import { motion } from "framer-motion";
import { Logolanding } from "../../utils/motion";

function Services() {
  return (
    <Box
      sx={{
        backgroundColor: "#0a1411",
      }}
      py={"var(--primary-padding)"}>
      <Container>
        <Typography
          className="head-title"
          component={motion.p}
          initial={Logolanding().hidden}
          animate={Logolanding().show}>
          Services
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
              <motion.div>
                <ServiceCard info={info} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
