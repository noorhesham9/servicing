import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
function PlanCard(Props) {
  const { info } = Props;
  const { title, subtitle, features } = info;
  return (
    <Card className="card">
      <Box display="flex" flexDirection="column">
        <CardContent>
          <Stack>
            <Typography
              fontWeight="bold"
              textAlign={{ xs: "center", sm: "start" }}
              fontSize={{
                xs: "var(--xs-title-second-font-fontSize)",
                md: "var(--lg-title-second-font-fontSize)",
              }}
              fontFamily="var(--second-font)"
              className="text">
              {title}
            </Typography>
            <Typography
              fontWeight="bold"
              textAlign={{ xs: "center", sm: "start" }}
              fontSize={{
                xs: "var(--xs-title-second-font-fontSize)",
                md: "var(--lg-title-second-font-fontSize)",
              }}
              fontFamily="var(--second-font)"
              className="text">
              {subtitle}
            </Typography>
          </Stack>
          <Typography
            textAlign="center"
            fontSize="var( --text-fontSize)"
            className="text"
            py="5px"></Typography>
        </CardContent>
        <CardActions>
          <Button
            href="#contacts"
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "var(--button-color)",
              // marginLeft: "10px",
              width: "fit-content",
              fontWeight: "600",
              border: "1px solid var(--primary-color)",
              "&:hover": {
                backgroundColor: "transparent",
                color: "var(--primary-color)",
              },
            }}
            variant="contained">
            Get Started
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default PlanCard;
