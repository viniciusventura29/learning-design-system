import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle, Info, Warning, X } from "phosphor-react";
import { Children, ReactNode } from "react";

export interface ToastProps {
    type : "Info" | "Warning" | "Success" | "Error"
    title: string
    children: string
    asChild?: boolean
    className?: string
}

export function ToastInfo({children, title, type="Info", ...props}: ToastProps) {
  return (

    <ToastPrimitive.Provider swipeDirection="right" swipeThreshold={100}>
      <ToastPrimitive.Root defaultOpen className="flex justify-between border-l-8 border-cyan-500 bg-white rounded p-4">
        <div  className="flex flex-row items-center">
          <Info size={70} color="#81d8f7" />
          <div className="ml-4">/
        <ToastPrimitive.Title className="text-lg font-bold">{title}</ToastPrimitive.Title>
        <ToastPrimitive.Description className="text-gray-500" > {children} </ToastPrimitive.Description>
          </div>
        </div>
        <div className="flex items-center">
        <ToastPrimitive.Close className="flex items-center hover:bg-cyan-200 p-2 rounded right-0"><X /></ToastPrimitive.Close>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}

export function ToastSuccess({children, title, type="Info", ...props}: ToastProps) {
  return (

    <ToastPrimitive.Provider swipeDirection="right" swipeThreshold={100}>
      <ToastPrimitive.Root defaultOpen className="flex justify-between border-l-8 border-cyan-500 bg-white rounded p-4">
        <div  className="flex flex-row items-center">
          <CheckCircle size={70} color="#81d8f7" />
          <div className="ml-4">/
        <ToastPrimitive.Title className="text-lg font-bold">{title}</ToastPrimitive.Title>
        <ToastPrimitive.Description className="text-gray-500" > {children} </ToastPrimitive.Description>
          </div>
        </div>
        <div className="flex items-center">
        <ToastPrimitive.Close className="flex items-center hover:bg-cyan-200 p-2 rounded right-0"><X /></ToastPrimitive.Close>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}

export function ToastWarning({children, title, type="Info", ...props}: ToastProps) {
  return (

    <ToastPrimitive.Provider swipeDirection="right" swipeThreshold={100}>
      <ToastPrimitive.Root defaultOpen className="flex justify-between border-l-8 border-cyan-500 bg-white rounded p-4">
        <div  className="flex flex-row items-center">
          <Warning size={70} color="#81d8f7" />
          <div className="ml-4">/
        <ToastPrimitive.Title className="text-lg font-bold">{title}</ToastPrimitive.Title>
        <ToastPrimitive.Description className="text-gray-500" > {children} </ToastPrimitive.Description>
          </div>
        </div>
        <div className="flex items-center">
        <ToastPrimitive.Close className="flex items-center hover:bg-cyan-200 p-2 rounded right-0"><X /></ToastPrimitive.Close>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}

export function ToastError({children, title, type="Info", ...props}: ToastProps) {
  return (

    <ToastPrimitive.Provider swipeDirection="right" swipeThreshold={100}>
      <ToastPrimitive.Root defaultOpen className="flex justify-between border-l-8 border-cyan-500 bg-white rounded p-4">
        <div  className="flex flex-row items-center">
          <Warning size={70} color="#81d8f7" />
          <div className="ml-4">/
        <ToastPrimitive.Title className="text-lg font-bold">{title}</ToastPrimitive.Title>
        <ToastPrimitive.Description className="text-gray-500" > {children} </ToastPrimitive.Description>
          </div>
        </div>
        <div className="flex items-center">
        <ToastPrimitive.Close className="flex items-center hover:bg-cyan-200 p-2 rounded right-0"><X /></ToastPrimitive.Close>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}

