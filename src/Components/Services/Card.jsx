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
function ServiceCard(Props) {
  const { info } = Props;
  const { id, icon, title, desc, bOne, bTwo, route } = info;

  return (
    <Card className="card">
      {/* <CardMedia component="img" height="250px" image={img} alt={title} /> */}
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
            {title}
          </Typography>
          <Typography
            textAlign="center"
            fontSize="var( --text-fontSize)"
            className="text"
            py="5px">
            {desc}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", pb: "40px" }}>
          <Button
            className="btn"
            variant="outlined"
            href={"#"}
            sx={{
              borderColor: "var(--primary-color)",
              color: "white",
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
            className="btn"
            variant="outlined"
            href={"#"}
            sx={{
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
