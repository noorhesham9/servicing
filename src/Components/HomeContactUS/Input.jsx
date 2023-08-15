import { Field } from "formik";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";
function Input(Props) {
  const { title, required, name, lang, ...rest } = Props;
  return (
    <Stack className="form-control">
      <Field
        className={` inpuuuutField ${
          lang === "en" ? "english-text" : " arabic-text"
        }`}
        name={name}
        id={name}
        {...rest}
        as={TextField}
        required={required}
        label={`${title}`}
        sx={{
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--primary-color)",
            "&:hover": {
              borderColor: "var(--primary-color)",
            },
          },
          "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--third-color)",
            },
          "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
            fontFamily: "inherit",
          },

          m: "10px 0",
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
      />
    </Stack>
  );
}

export default Input;
