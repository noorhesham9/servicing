import Choose from "./Choose";
import Input from "./Input";
import TextArea from "./TextArea";
import Radiooo from "./Radio";
function FormikControl(Props) {
  const { control, ...rest } = Props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "choose":
      return <Choose {...rest} />;
    case "radio":
      return <Radiooo {...rest} />;

    default:
      return null;
  }
}

export default FormikControl;
