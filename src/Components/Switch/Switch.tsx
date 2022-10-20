import * as SwitchPrimitive from "@radix-ui/react-switch";
import { clsx } from "clsx";
import React, { ReactNode } from "react";

export interface SwitchProps extends SwitchPrimitive.SwitchProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  allowed?:"able" | "disable"
}

export function Switch({allowed="able", children, className, size = "md" }: SwitchProps) {
  let allow;
  allowed === "disable"? (allow = true) : false
  return (
    <SwitchPrimitive.Root disabled={allow}
      className={clsx(
        "group radix-state-checked:bg-cyan-500 radix-state-unchecked:bg-gray-200 relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        {
          "w-[40px] h-[20px]": size === "sm",
          "w-[45px] h-[25px]": size === "md",
          "w-[50px] h-[30px]": size === "lg",
        },
        {
          "cursor-not-allowed opacity-80": allowed ==="disable"
        },
        className
      )}
    >
      <SwitchPrimitive.Thumb
        className={clsx(
          "group-radix-state-checked:translate-x-5 group-radix-state-unchecked:translate-x-0 pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
          {
            "w-[16px] h-[16px]": size === "sm",
            "w-[21px] h-[21px]": size === "md",
            "w-[26px] h-[26px]": size === "lg",
          }
        )}>

        {children}
        
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export default Switch;
