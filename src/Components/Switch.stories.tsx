import { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchProps } from "./Switch";
import { Text } from "./Text";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },


  decorators:[
    (Story) => {
        return(
            <div className="flex items-center gap-2">
                {Story()}
            </div>
        )
    }
  ]
} as Meta<SwitchProps>;

export const Default: StoryObj<SwitchProps> = {
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

export const Small: StoryObj<SwitchProps> = {
  args:{
    size:'sm'
  },
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


export const Large: StoryObj<SwitchProps> = {
  args:{
    size:'lg'
  },
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

