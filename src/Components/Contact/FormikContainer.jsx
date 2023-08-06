import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Stack } from "@mui/material";
import emailjs from "@emailjs/browser";
import "./form.css";
const initialValues = {
  name: "",
  email: "",
  message: "",
  subject: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  subject: Yup.string().required("Required !"),
  email: Yup.string().email("invalid email format").required("Required !"),
  message: Yup.string().required("Required !"),
});
function FormikContainer() {
  const handleSubmit = (values) => {
    const { name, email, message, subject } = values;
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

        {
          from_name: `${name} `,
          to_name: "Q-Blink Company",
          from_email: email,
          to_email: "qblink02@gmail.com",
          message: `subject: ${subject}, messasge: ${message}, Email:${email} `,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {(formik) => {
        return (
          <Form className="form">
            <Stack justifyContent="space-between">
              <FormikControl control="input" name="name" type="name" />
              <FormikControl control="input" name="email" type="email" />
              <FormikControl control="input" name="subject" type="subject" />
              <FormikControl control="textarea" name="message" />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "var(--second-font)",
                  bgcolor: "rgba(0,0,0,.5)",
                  color: "var(--primary-color)",
                  "&:hover": {
                    bgcolor: "var(--primary-color)",
                    color: "var(--button-color)",
                  },
                  m: "15px 0",
                  p: "10px",
                  borderRadius: "10px",
                }}>
                submit
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
