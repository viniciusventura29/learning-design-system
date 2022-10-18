import { Meta, StoryObj } from "@storybook/react";
import {
  ToastInfo,
  ToastWarning,
  ToastSuccess,
  ToastError,
  ToastProps,
} from "./Toast";

import { Info } from 'phosphor-react'

export default {
  title: "Components/Toast",
  component: ToastInfo,
  args: {
    children: "Type your text here",
     title: "Title",
  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },
    },
  },
}

export const Default: StoryObj<ToastProps> = {
  argTypes:{
    asChild:{
      table:{
        disable:true
      }
    },
    className:{
      table:{
        disable:true
      }
    }
  }
};
