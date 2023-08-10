import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Stack } from "@mui/material";
import axios from "axios";
import "./form.css";
const initialValues = {
  Fname: "",
  Lname: "",
  email: "",
  phone: "",
  location: "",
  mainSubject: "maintainence",
  subject: "",
  message: "",
};
const validationSchema = Yup.object({
  Fname: Yup.string().required("Required !"),
  Lname: Yup.string().required("Required !"),
  email: Yup.string().email("invalid email format").required("Required !"),
  phone: Yup.number().required("Required !"),
  location: Yup.string(),
  subject: Yup.string().required("Required !"),
  message: Yup.string().required("Required !"),
});

const handleSubmit = (values, { resetForm }) => {
  axios
    .post(
      "https://sheet.best/api/sheets/80c4ff43-28b0-4306-bc41-0e6c60b8e850",
      values
    )
    .then(() => {
      resetForm({
        Fname: "",
        Lname: "",
        email: "",
        phone: "",
        location: "",
        mainSubject: "maintainence",
        subject: "",
        message: "",
      });
    });
};

function FormikContainer() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {(formik) => {
        return (
          <Form
            className="form"
            style={{
              width: "100%",
            }}>
            <Stack justifyContent="space-between">
              <Stack className="FnameAndLname">
                <FormikControl
                  control="input"
                  name="Fname"
                  type="text"
                  title="First name"
                  required
                />
                <FormikControl
                  control="input"
                  name="Lname"
                  type="text"
                  title="Last name"
                  required
                />
              </Stack>

              <Stack className="emailandphone">
                <FormikControl
                  control="input"
                  name="email"
                  type="email"
                  title="Email"
                  required
                />
                <FormikControl
                  control="input"
                  name="phone"
                  type="phone"
                  title="Phone"
                  required
                />
              </Stack>
              <FormikControl
                control="input"
                name="location"
                type="text"
                title="Location"
              />
              <FormikControl
                className="optionServices"
                control="choose"
                name="subject"
                title="subject"
              />
              <FormikControl
                control="textarea"
                name="message"
                title="message"
              />
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
