import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const SolidButton = () => <Button>Save</Button>;
export const FlatButton = () => <Button flat>Save</Button>;
