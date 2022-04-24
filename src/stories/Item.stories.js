import Item from "../components/Item";

export default {
  title: "Item",
  component: Item,
  argTypes: {
    itemName: {
      control: "text",
    },
  },
};

const Template = ({ itemName }) => <Item>{itemName}</Item>;

export const Basic = Template.bind({});
Basic.args = {
  itemName: "Item Name",
};
