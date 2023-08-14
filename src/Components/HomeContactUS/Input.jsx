import { Field } from "formik";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";
function Input(Props) {
  const { title, required, name, ...rest } = Props;

  return (
    <Stack className="form-control">
      <Field
        className="inpuuuutField"
        name={name}
        id={name}
        {...rest}
        as={TextField}
        required={required}
        label={`Enter Your ${title}`}
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
