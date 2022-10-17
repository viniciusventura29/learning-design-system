import { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastProps,
} from "./Toast";

import { Envelope } from 'phosphor-react'

export default {
  title: "Components/Toast",
  component: Toast,
  args: {
    children: [
     
        <Toast>as</Toast>
     ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ToastProps>;

export const Default: StoryObj<ToastProps> = {};

export const WithoutIcon: StoryObj<ToastProps> = {
  args:{
    children:(
      <Toast/>
    )
  }
};
