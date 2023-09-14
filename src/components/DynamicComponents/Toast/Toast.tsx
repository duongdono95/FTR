import React, { ReactElement } from "react";
import { toast as toastify } from "react-toastify";
import "./Toast.scss";
import { AlertTriangle, Ban, CheckCircle2, LucideIcon } from "lucide-react";

const CustomToast = ({
  message,
  icon,
  type,
}: {
  message?: string;
  icon?: ReactElement<any, any>;
  type: "success" | "error" | "warning" | "custom";
}) => {
  return (
    <div className="dynamic-toast">
      <div className="dynamic-toast-icon">
        {type === "custom" && icon ? icon : null}
        {type === "success" && <CheckCircle2 color="white" strokeWidth={2.5} />}
        {type === "error" && <Ban color="white" strokeWidth={2.5} />}
        {type === "warning" && (
          <AlertTriangle color="white" strokeWidth={2.5} />
        )}
      </div>
      <p className="toast-msg">{message}</p>
    </div>
  );
};

export const toast = {
  error: (message: any) =>
    toastify.success(CustomToast({ message, type: "error" }), {
      icon: false,
      className: "dynamic-toast-error-bg",
    }),
  warning: (message: any) =>
    toastify.success(CustomToast({ message, type: "warning" }), {
      icon: false,
      className: "dynamic-toast-warning-bg",
    }),
  success: (message: any) =>
    toastify.success(CustomToast({ message, type: "success" }), {
      icon: false,
      className: "dynamic-toast-success-bg",
    }),
  custom: (message: any, icon?: ReactElement<any, any>) =>
    toastify.success(CustomToast({ message, icon, type: "custom" }), {
      icon: false,
      className: "dynamic-toast-custom-bg",
    }),
};
