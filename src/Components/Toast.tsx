import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { Children, ReactNode } from "react";

export interface ToastProps {
    children: string
    asChild?: boolean;
    className: string;
}

export function Toast({children, ...props}: ToastProps) {
  return (

    <ToastPrimitive.Provider swipeDirection="right" swipeThreshold={50}>
      <ToastPrimitive.Root defaultOpen className="flex justify-between border-l-8 border-cyan-500 bg-gray-100 rounded p-4">
        <div>
        <ToastPrimitive.Title className="text-lg font-bold">Title</ToastPrimitive.Title>
        <ToastPrimitive.Description className="text-gray-500" > {children} </ToastPrimitive.Description>
        </div>
        <div className="flex items-center">
        <ToastPrimitive.Close className="flex items-center bg-cyan-300 p-2 rounded right-0"><X /></ToastPrimitive.Close>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}
