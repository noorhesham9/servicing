import { IconButton, Stack } from "@mui/material";
import { WhatsApp, Telegram } from "@mui/icons-material";
function SocialMedia() {
  return (
    <Stack
      justifyContent="center"
      direction={{ xs: "row", sm: "column" }}
      flexWrap={"wrap"}
      gap={"10px"}
      borderRadius="10px">
      <IconButton
        href="https://wh.ms/2001024864825"
        target="blank"
        sx={{
          color: "var(--button-color)",
          backgroundColor: "var(--primary-color)",
          "&:hover": {
            color: "var(--primary-color)",
          },
        }}>
        <WhatsApp
          sx={{
            fontSize: "30px",
            transition: ".4s",
          }}
        />
      </IconButton>

      <IconButton
        href="https://t.me/Q_blink"
        target="blank"
        sx={{
          color: "var(--button-color)",
          backgroundColor: "var(--primary-color)",
          "&:hover": {
            color: "var(--primary-color)",
          },
        }}>
        <Telegram
          sx={{
            fontSize: "30px",
            transition: ".4s",
          }}
        />
      </IconButton>
    </Stack>
  );
}

export default SocialMedia;
