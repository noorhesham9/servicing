import { Grid, Box, Container } from "@mui/material";
import { infoCard } from "../../Constants";
import ServiceCard from "./Card";
import { motion } from "framer-motion";

function Services() {
  return (
    <Box py={"var(--primary-padding)"}>
      <Container>
        <Grid container spacing={3}>
          {infoCard.map((info, index) => (
            <Grid
              item
              key={info.id}
              xs={12}
              sm={4}
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
