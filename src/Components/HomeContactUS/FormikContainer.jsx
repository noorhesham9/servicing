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
  plan: "",
};
const validationSchema = Yup.object({
  Fname: Yup.string().required("Required !"),
  Lname: Yup.string().required("Required !"),
  email: Yup.string().email("invalid email format").required("Required !"),
  phone: Yup.number().required("Required !"),
  location: Yup.string(),
  subject: Yup.string().required("Required !"),
  message: Yup.string().required("Required !"),
  plan: Yup.string().required("Required !"),
});
function FormikContainer(Props) {
  const { services, Plan, setPlan, t, lang } = Props;
  {
    services === undefined
      ? (initialValues.subject = "")
      : (initialValues.subject = services);
  }

  const [open, setOpen] = useState(false);
  const [openerror, setOpenerror] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setOpenerror(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post(
        "https://sheet.best/api/sheets/77d9d849-49b4-4091-95f1-8fb35338007a",
        values
      )
      .then(() => {
        setOpen(true);
        setPlan("");
        resetForm({ values: initialValues });
      })
      .catch((error) => {
        console.log(error);
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
                  title={t("contactFirstName")}
                  required
                  lang={lang}
                />
                <FormikControl
                  control="input"
                  name="Lname"
                  type="text"
                  title={t("contactLastName")}
                  required
                  lang={lang}
                />
              </Stack>

              <Stack className="emailandphone">
                <FormikControl
                  control="input"
                  name="email"
                  type="email"
                  title={t("contactEmail")}
                  required
                  lang={lang}
                />
                <FormikControl
                  control="input"
                  name="phone"
                  type="phone"
                  title={t("contactPhone")}
                  required
                  lang={lang}
                />
              </Stack>
              <FormikControl
                control="input"
                name="location"
                type="text"
                title={t("contactLocation")}
                lang={lang}
              />
              <FormikControl
                services={services}
                className="optionServices"
                control="choose"
                name="subject"
                title={t("contactSubject")}
                t={t}
                lang={lang}
              />
              <FormikControl
                plan={Plan}
                required
                setPlan={setPlan}
                control="radio"
                name="plan"
                title={t("contactPlan")}
                t={t}
                lang={lang}
              />
              <FormikControl
                control="textarea"
                name="message"
                title={t("contactMessage")}
                lang={lang}
              />
              <Button
                type="submit"
                variant="contained"
                className={` registerbutton ${
                  lang ? "english-heading" : " arabic-text"
                }`}
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  bgcolor: "rgba(0,0,0,.5)",
                  color: "var(--primary-color)",
                  m: "15px 0",
                  p: "10px",
                  borderRadius: "10px",
                }}>
                {t("contactSubmit")}
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}>
                  {t("contactmessageReceived")}
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
                  {t("contactmessageError")}
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
