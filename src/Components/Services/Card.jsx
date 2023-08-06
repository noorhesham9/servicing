import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
function ServiceCard(Props) {
  const { info } = Props;
  const { id, img, title, desc, bOne, bTwo } = info;

  return (
    <Card
      className="card"
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: "100",
      }}>
      {/* <CardMedia component="img" height="250px" image={img} alt={title} /> */}
      <CardMedia sx={{ display: "flex", alignSelf: "start", p: "16px" }}>
        <FontAwesomeIcon
          icon={faLaptop}
          style={{ color: "#2b8b22", fontSize: "50px", textAlign: "start" }}
          className="icon"
        />
      </CardMedia>
      <Box>
        <CardContent>
          <Typography
            fontWeight="bold"
            textAlign="start"
            fontSize={{
              xs: "var(  --xs-title-fontSize)",
              md: "var( --lg-title-fontSize)",
            }}
            className="text">
            {title}
          </Typography>
          <Typography
            textAlign="start"
            fontSize={{
              xs: "var(--xs-text-fontSize)",
              md: "var(--lg-text-fontSize)",
            }}
            className="text">
            {desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            href={"#"}
            sx={{
              bgcolor: "var(--primary-color)",
              "&:hover": { bgcolor: "var(--secondary-color)" },
              p: "8px 25px",
              fontSize: {
                xs: "14px",
                md: "16px",
              },
            }}>
            {bOne}
          </Button>
          <Button
            variant="contained"
            href={"#"}
            sx={{
              bgcolor: "var(--primary-color)",
              "&:hover": { bgcolor: "var(--secondary-color)" },
              p: "8px 25px",
              fontSize: {
                xs: "14px",
                md: "16px",
              },
            }}>
            {bTwo}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default ServiceCard;
