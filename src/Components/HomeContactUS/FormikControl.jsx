import Choose from "./Choose";
import Input from "./Input";
import TextArea from "./TextArea";
import Radiooo from "./Radio";
function FormikControl(Props) {
  const { control, lang, ...rest } = Props;
  switch (control) {
    case "input":
      return <Input {...rest} lang={lang} />;
    case "textarea":
      return <TextArea {...rest} lang={lang} />;
    case "choose":
      return <Choose {...rest} lang={lang} />;
    case "radio":
      return <Radiooo {...rest} lang={lang} />;

    default:
      return null;
  }
}

export default FormikControl;
