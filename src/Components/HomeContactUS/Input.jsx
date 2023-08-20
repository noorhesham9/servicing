import { Field } from "formik";
import { Stack, TextField } from "@mui/material";
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
      />
    </Stack>
  );
}

export default Input;
