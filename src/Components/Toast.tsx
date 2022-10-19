import * as ToastPrimitive from "@radix-ui/react-toast";
import { clsx } from "clsx";
import { CheckCircle, Info, Warning, X, XCircle } from "phosphor-react";
import { ReactNode } from "react";

export interface ToastRootProps {
  children: ReactNode;
  type: "Info" | "Success" | "Warning" | "Error";
}

export function ToastRoot({ type = "Success", ...props }: ToastRootProps) {
  let icon;
  type === "Info" ? (icon = <Info size={70} color="#81d8f7" />) : null;
  type === "Success" ? (icon = <CheckCircle size={70} color="#22c55e" />) : null;
  type === "Warning" ? (icon = <Warning size={70} color="#F97316" />) : null;
  type === "Error" ? (icon = <XCircle size={70} color="#FF4444" />) : null;

  return (
    <ToastPrimitive.ToastProvider>
      <ToastPrimitive.Root
        className={clsx(
          "flex items-center border-l-8 bg-white rounded p-4 pr-20 absolute z-10 right-4 bottom-6 gap-5",
          {
            "border-cyan-500": type === "Info",
            "border-green": type === "Success",
            "border-orange": type === "Warning",
            "border-red": type === "Error",
          }
        )}
      >
        <>
          {icon}
          {props.children}
        </>
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

export function ToastIcon(props: ToastIconProps) {
  return <div className="flex flex-row items-center">{props.children}</div>;
}

export interface ToastBodyProps {
  title: string;
  children: string;
}

export function ToastBody({ children, ...props }: ToastBodyProps) {
  return (
    <div className="ml-4 flex flex-col">
      <span className="text-lg font-bold text-black">{props.title}</span>
      <span className="text-gray-500 w-[30rem] mt-1 text-justify">
        {" "}
        {children}{" "}
      </span>
    </div>
  );
}

export const Toast = {
  Root: ToastRoot,
  Icon: ToastIcon,
  Input: ToastBody,
};
