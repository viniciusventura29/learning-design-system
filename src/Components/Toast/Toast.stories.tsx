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
    time: {
      type:"number"
    },
  },

};

export const Info: StoryObj<ToastRootProps> = {
  argTypes: {
    type: {
      table:{
        disable:true
      },
      },
    children: {
      table: {
        disable: true,
      },
    },
    time: {
      type:"number"
    },
  },

};

export const Warning: StoryObj<ToastRootProps> = {
  args:{
    type:"Warning"
  },
  argTypes: {
    type: {
      table:{
        disable:true
      },
      },
    children: {
      table: {
        disable: true,
      },
    },
    time: {
      type:"number"
    },
  },

};

export const Success: StoryObj<ToastRootProps> = {
  args:{
    type:"Success"
  },
  argTypes: {
    type: {
      table:{
        disable:true
      },
      },
    children: {
      table: {
        disable: true,
      },
    },
    time: {
      type:"number"
    },
  },

};

export const Error: StoryObj<ToastRootProps> = {
  args:{
    type:"Error"
  },
  argTypes: {
    type: {
      table:{
        disable:true
      },
      },
    children: {
      table: {
        disable: true,
      },
    },
    time: {
      type:"number"
    },
  },

};