import { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastBody, ToastRootProps, ToastIcon } from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast.Root,
  args: {
    children: <Toast.Input title="Title" > 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      </Toast.Input>
  },

} as Meta<ToastRootProps>;

export const Default: StoryObj<ToastRootProps> = {
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },

};