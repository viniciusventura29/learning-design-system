import { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastBody, ToastRootProps, ToastIcon } from "./Toast";

import { Info } from 'phosphor-react'

export default {
  title: "Components/Toast",
  component: Toast.Root,
  args: {
    children: [
      <Toast.Icon >
        <Info size={70} color="#81d8f7" />
      </Toast.Icon>,
      <Toast.Input title="ASDASDASFASFASFASFSFASFASFSFSF" > 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      </Toast.Input>
    ],

  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },
    },
  },
}

export const Default: StoryObj<ToastRootProps> = {
};