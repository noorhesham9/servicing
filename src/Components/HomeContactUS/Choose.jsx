import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Field } from "formik";
import { infoCard } from "../../Constants";
import { Subject } from "@mui/icons-material";
const Choose = (Props) => {
  const { className, title, name, services, t, lang, ...rest } = Props;
  const [value, setVAlue] = useState("");

  useEffect(() => {
    if (services === undefined) {
      setVAlue("");
    } else {
      setVAlue(t(services));
    }
  }, [services, t]);
  return (
    <Box>
      <FormControl
        disabled={services === undefined ? false : true}
        sx={{
          m: "10px 0",
          color: "var(--text-color) !important",
        }}
        required
        fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          className={`  ${lang === "en" ? "english-text" : " arabic-text"}`}>
          {t(title)}
        </InputLabel>

        {services === undefined ? (
          <Field
            labelId="demo-simple-select-label"
            as={Select}
            name="subject"
            required
            id={name}
            {...rest}
            className={className}
            label={`${title}*`}>
            {infoCard.map((info) => {
              const { id, useTitle } = info;
              return (
                <MenuItem
                  key={id}
                  value={t(useTitle)}
                  className={` servhome ${className} ${
                    lang === "en" ? "english-text" : " arabic-text"
                  }`}>
                  {t(useTitle)}
                </MenuItem>
              );
            })}
          </Field>
        ) : (
          <Field
            labelId="demo-simple-select-label"
            as={Select}
            name="subject"
            value={value}
            required
            id={name}
            {...rest}
            className={` servroute ${className} ${
              lang === "en" ? "english-text" : " arabic-text"
            }`}
            label={`${title}*`}>
            {infoCard.map(({ id, useTitle }) => {
              return (
                <MenuItem key={id} value={t(useTitle)}>
                  {t(useTitle)}
                </MenuItem>
              );
            })}
          </Field>
        )}
      </FormControl>
    </Box>
  );
};

export default Choose;
