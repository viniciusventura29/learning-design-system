import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle, Info, Warning, X } from "phosphor-react";
import { Children, ReactNode } from "react";

export interface ToastRootProps {
  children: ReactNode;
}

export function ToastRoot(props: ToastRootProps) {
  return (
    <ToastPrimitive.ToastProvider>
      <ToastPrimitive.Root className="flex items-center border-l-8 border-cyan-500 bg-white rounded p-4 pr-20 absolute z-10 right-4 bottom-6 gap-5">
        {props.children}
        <ToastPrimitive.Close className="cursor-pointer absolute flex items-center hover:bg-cyan-200 p-2 rounded right-6 text-black">
            <X />
          </ToastPrimitive.Close>
      </ToastPrimitive.Root>
      
    <ToastPrimitive.Viewport />
    </ToastPrimitive.ToastProvider>
  );
}


export interface ToastIconProps {
  children: ReactNode;
}

export function ToastIcon(props: ToastIconProps){
  return(
        <div className="flex flex-row items-center">
          <Info size={70} color="#81d8f7" />
        </div>
  );
}

export interface ToastBodyProps {
  title: string
  children: string
}

export function ToastBody({children, ...props}: ToastBodyProps){
  return(
    <div className="ml-4 flex flex-col">
      <span className="text-lg font-bold text-black">{props.title}</span>
      <span className="text-gray-500 w-[30rem] mt-2 text-justify"> {children} </span>
    </div>
    
  );
}

export const Toast ={
  Root: ToastRoot,
  Icon: ToastIcon,
  Input : ToastBody
}
