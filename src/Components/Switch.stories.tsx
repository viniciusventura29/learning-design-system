import { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchProps } from "./Switch";
import { Text } from "./Text";

export default {
  title: "Components/Switch",
  component: Switch,
  args: {
    children: "Button Text",
  },

  decorators:[
    (Story) => {
        return(
            <div className="flex items-center gap-2">
                {Story()}
                <Text size='sm'>Your text here</Text>
            </div>
        )
    }
  ]
} as Meta<SwitchProps>;

export const Default: StoryObj<SwitchProps> = {};
