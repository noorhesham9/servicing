import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
function ServiceCard(Props) {
  const { info, t } = Props;
  const { icon, title, desc, bOne, bTwo, route } = info;
  const isPresent = useIsPresent();

  return (
    <Card className="card">
      <CardMedia sx={{ display: "flex", alignSelf: "center", pt: "40px" }}>
        <FontAwesomeIcon
          icon={icon}
          style={{ color: "#2b8b22", fontSize: "50px" }}
          className="icon"
        />
      </CardMedia>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Link
          to={route}
          className="card-link"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <CardContent>
          <Typography
            fontWeight="bold"
            textAlign="center"
            fontSize={{
              xs: "var(--xs-title-second-font-fontSize)",
              md: "var(--lg-title-second-font-fontSize)",
            }}
            fontFamily="var(--second-font)"
            className="text">
            {t(title)}
          </Typography>
          <Typography
            textAlign="center"
            fontSize="var( --text-fontSize)"
            className="text"
            py="5px">
            {t(desc)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: "40px",
          }}>
          <Link to={route}>
            <Button
              className="btn"
              variant="outlined"
              sx={{
                borderColor: "var(--primary-color)",
                color: "white",
                p: "8px 25px",
                textTransform: "capitalize",
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
              }}>
              {t(bOne)}
            </Button>
          </Link>
          <Link to={`${route}#contacts`}>
            <Button
              className="btn"
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
              }}>
              {t(bTwo)}
            </Button>
          </Link>
        </CardActions>
      </Box>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.7, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.7, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </Card>
  );
}

export default ServiceCard;
