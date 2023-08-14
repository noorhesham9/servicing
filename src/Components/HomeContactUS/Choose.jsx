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
  const { className, title, name, services, ...rest } = Props;
  const [value, setVAlue] = useState("");
  const handleChange = (event) => {
    setVAlue(event.target.value);
  };
  useEffect(() => {
    if (services === undefined) {
      setVAlue("");
    } else {
      setVAlue(services);
    }
  }, []);
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
        <InputLabel id="demo-simple-select-label">
          Choose your {title}
        </InputLabel>

        {services === undefined ? (
          <Field
            sx={{
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary-color)",
              },
              "& label": { color: "var(--text-color)" },
              "& input": {
                borderColor: "var(--third-color)",
                color: "var(--text-color)",
                borderRadius: "10px",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                fontWeight: "700",
                color: "var(--third-color)",
              },

              "& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "var(--third-color)",
                },
            }}
            labelId="demo-simple-select-label"
            as={Select}
            name="subject"
            required
            id={name}
            {...rest}
            className={className}
            label={`Choose your ${title}*`}>
            {infoCard.map(({ id, useTitle }) => {
              return (
                <MenuItem key={id} value={useTitle}>
                  {useTitle}
                </MenuItem>
              );
            })}
          </Field>
        ) : (
          <Field
            sx={{
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary-color)",
              },
              "& label": { color: "var(--text-color)" },
              "& input": {
                borderColor: "var(--third-color)",
                color: "var(--text-color)",
                borderRadius: "10px",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                fontWeight: "700",
                color: "var(--third-color)",
              },

              "& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "var(--third-color)",
                },
            }}
            labelId="demo-simple-select-label"
            as={Select}
            name="subject"
            value={value}
            required
            id={name}
            {...rest}
            className={className}
            label={`Choose your ${title}*`}>
            {infoCard.map(({ id, useTitle }) => {
              return (
                <MenuItem key={id} value={useTitle}>
                  {useTitle}
                </MenuItem>
              );
            })}
          </Field>
        )}
        {/* <Field
          sx={{
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primary-color)",
            },
            "& label": { color: "var(--text-color)" },
            "& input": {
              borderColor: "var(--third-color)",
              color: "var(--text-color)",
              borderRadius: "10px",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              fontWeight: "700",
              color: "var(--third-color)",
            },

            "& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "var(--third-color)",
              },
          }}
          labelId="demo-simple-select-label"
          as={Select}
          name="subject"
          required
          id={name}
          {...rest}
          className={className}
          label={`Choose your ${title}*`}>
          {infoCard.map(({ id, useTitle }) => {
            return (
              <MenuItem key={id} value={useTitle}>
                {useTitle}
              </MenuItem>
            );
          })}
        </Field> */}
      </FormControl>
    </Box>
  );
};

export default Choose;
