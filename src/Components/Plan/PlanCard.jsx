import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-scroll";
function PlanCard(Props) {
  const { info, setPlan, t, lang } = Props;

  const { title, subtitle, features } = info;
  return (
    <Card
      className="card"
      sx={{
        "&::after": { animation: "none !important " },
      }}>
      <Box display="flex" flexDirection="column">
        <CardContent>
          <Stack>
            <Typography
              fontWeight="bold"
              textAlign={{ xs: "center", md: "start" }}
              className={`text ${lang ? "english-heading" : " arabic-heading"}`}
              fontSize={{
                xs: "var(--xs-title-second-font-fontSize)",
                md: "var(--lg-title-second-font-fontSize)",
              }}
              fontFamily="var(--second-font)">
              {t(title)}
            </Typography>
            <Typography
              textAlign={{ xs: "center", md: "start" }}
              color="rgb(250,250,250,.6)"
              fontSize="14px"
              pt="7px"
              className={`  ${lang ? "english-text" : " arabic-text"}`}>
              {t(subtitle)}
            </Typography>
          </Stack>
          <Typography
            textAlign={{ xs: "center", md: "start" }}
            fontSize="var( --xs-title-fontSize)"
            p="50px 0 10px"
            className={` text ${lang ? "english-text" : " arabic-text"}`}>
            {t("featuresTitle")}
          </Typography>
          <Grid container spacing={1}>
            {features.map((info, index) => (
              <Grid key={index} item xs={12} md={6}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={{ xs: "center", md: "flex-start" }}>
                  <IconButton>
                    <CheckCircleIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Typography
                    className={`  ${lang ? "english-text" : " arabic-text"}`}>
                    {t(info)}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </CardContent>

        <CardActions sx={{ py: "20px" }}>
          <Link
            onClick={() => {
              setPlan(title);
            }}
            smooth={true}
            duration={800}
            to="contacts"
            style={{ width: "100%", margin: "0 20px" }}>
            <Button
              sx={{
                backgroundColor: "var(--primary-color)",
                width: "100%",
                textTransform: "capitalize",
              }}
              className={` btn ${lang ? "english-text" : " arabic-text"}`}
              variant="outlined">
              {t("featuresBtn")}
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
}

export default PlanCard;
