import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "phosphor-react";

export interface ToastProps {}

export function Toast(props: ToastProps) {
  return (

    <ToastPrimitive.Provider>
      <ToastPrimitive.Root className="bg-cyan-500 rounded p-4">
        <ToastPrimitive.Title className="text-lg font-bold">Title</ToastPrimitive.Title>
        <ToastPrimitive.Description> Type your text here! </ToastPrimitive.Description>
        <ToastPrimitive.Action altText="teste" />
        <ToastPrimitive.Close className="bg-cyan-300 p-2 rounded"><X /></ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}
