import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "../Texts/Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
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
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
