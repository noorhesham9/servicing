import { Box } from "@mui/material";
import { laptop02 } from "../../assets";

function SubLanding() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${laptop02})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "50vh",
        position: "relative",
      }}></Box>
  );
}

export default SubLanding;
