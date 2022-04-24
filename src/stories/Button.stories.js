import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    flat: {
      control: "boolean",
    },
  },
};

const Template = ({ ...args }) => <Button {...args}>Save</Button>;

export const Basic = Template.bind({});
Basic.args = {
  flat: false,
};
