import { Field } from "formik";
import { Box, TextField } from "@mui/material";
function TextArea(Props) {
  const { name, ...rest } = Props;
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
          bgcolor: "rgba(0,0,0,.4)",
          m: "15px 0",
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--primary-color)",
            fontWeight: "700",
          },
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderRadius: "10px",
          },
          "& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--primary-color)",
              borderRadius: "10px",
            },
        }}
        label="A few words about the project"
        multiline
        rows={3}
      />
    </Box>
  );
}

export default TextArea;
