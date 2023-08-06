import Input from "./Input";
import TextArea from "./TextArea";

function FormikControl(Props) {
  const { control, ...rest } = Props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
