import { Box, Container, Stack, Typography } from "@mui/material";
import { laptop01 } from "../../assets";

function ServCardInfo(Props) {
  const { title } = Props;
  return (
    <Box bgcolor="var(--bg-color)" py="var(--primary-padding)">
      <Container>
        <Typography className="head-title">{title}</Typography>
        <Typography textAlign="center" mb="40px">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quidem sint velit sequi minima repellendus ducimus dolore sed. Ut
          minima laborum voluptatum earum mollitia, quidem illo molestias dicta
          quis nisi?
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          bgcolor="rgb(202 255 189 / 09%)">
          <Stack>
            <Typography textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nam
              adipisci vitae. Ex iure quo quidem voluptas explicabo quam earum
              tempora omnis, deserunt, tempore, a eos ratione optio dolor eius.
            </Typography>
          </Stack>
          <img src={laptop01} alt="laptop" style={{ maxWidth: "100%" }} />
        </Stack>
      </Container>
    </Box>
  );
}

export default ServCardInfo;
