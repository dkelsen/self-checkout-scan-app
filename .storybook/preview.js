import { addDecorator } from "@storybook/react";

import Theme from "../src/Theme";
import GlobalCSS from "../src/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <Theme>
    <GlobalCSS />
    {story()}
  </Theme>
));
