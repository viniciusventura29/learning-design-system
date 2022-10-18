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
        "Type your text here"
     ],
  },
};

export const Default: StoryObj<ToastProps> = {};
