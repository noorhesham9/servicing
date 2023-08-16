import { Field } from "formik";
import { Box, TextField } from "@mui/material";
function TextArea(Props) {
  const { title, name, lang, ...rest } = Props;
  return (
    <Box className="form-control ">
      <Field
        as={TextField}
        name={name}
        id={name}
        required
        {...rest}
        sx={{
          borderRadius: "10px",
          width: "100%",
          "& label": { color: "var(--text-color)" },
          "& textArea": {
            color: "var(--text-color)",
            borderRadius: "10px",
          },
          // bgcolor: "rgba(0,0,0,.4)",
          m: "15px 0",
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--primary-color)",
            fontWeight: "700",
          },
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderRadius: "10px",
            borderColor: "var(--primary-color)",
          },
          "& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--third-color)",
              borderRadius: "10px",
            },

          "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--third-color) !important",
            },
          "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
            fontFamily: "inherit !important",
          },
        }}
        label={`${title}`}
        className={`  ${lang === "en" ? "english-text" : " arabic-text"}`}
        multiline
        rows={5}
      />
    </Box>
  );
}

export default TextArea;
