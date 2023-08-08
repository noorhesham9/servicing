import { IconButton, Stack, Typography } from "@mui/material";

import { firstContactInfo, secondContactInfo } from "../../Constants";

function ContactInfo() {
  return (
    <Stack className="box">
      <Typography
        className="title"
        fontSize={{
          xs: "var(--xs-title-second-font-fontSize)",
          md: "var(--lg-title-second-font-fontSize)",
        }}>
        Contact Information
      </Typography>
      <Stack alignItems={{ xs: "center", sm: "flex-start" }}>
        {firstContactInfo.map((info) => (
          <Stack key={info.id} direction="row" alignItems="center">
            <IconButton>
              <info.icon sx={{ color: "var(--third-color)" }} />
            </IconButton>
            <Typography color="black" herf="#">
              {info.info}
            </Typography>
          </Stack>
        ))}
        <Stack direction="row">
          {secondContactInfo.map((info) => (
            <Stack key={info.id} direction="row" alignItems="center">
              <IconButton>
                <info.icon sx={{ color: "var(--third-color)" }} />
              </IconButton>
              <Typography color="black" herf="#">
                {info.info}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ContactInfo;
