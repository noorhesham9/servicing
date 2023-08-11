import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Stack, Snackbar } from "@mui/material";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useState } from "react";
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

function FormikContainer({ services }) {
  const [open, setOpen] = useState(false);
  const [openerror, setOpenerror] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setOpenerror(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post(
        "https://sheet.best/api/sheets/80c4ff43-28b0-4306-bc41-0e6c60b8e850",
        values
      )
      .then(() => {
        setOpen(true);
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
      })
      .catch(() => {
        setOpenerror(true);
      });
  };

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
                services={services}
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
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}>
                  The message was received successfully
                </Alert>
              </Snackbar>

              <Snackbar
                open={openerror}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}>
                  There is an error, please send an e-mail
                </Alert>
              </Snackbar>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
