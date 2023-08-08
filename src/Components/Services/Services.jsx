import { Grid, Box, Container, Typography } from "@mui/material";
import { infoCard } from "../../Constants";
import ServiceCard from "./Card";
import { motion } from "framer-motion";

function Services() {
  return (
    <Box
      sx={{
        backgroundColor: "#0a1411",
      }}
      py={"var(--primary-padding)"}>
      <Container>
        <Typography className="head-title">Services</Typography>
        <Grid container spacing={3}>
          {infoCard.map((info, index) => (
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
