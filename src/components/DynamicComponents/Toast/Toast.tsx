import React from "react";
import { toast as toastify } from "react-toastify";
import "./Toast.scss";
import { AlertTriangle, Ban, CheckCircle2 } from "lucide-react";
const ErrorToast = ({ message }: { message?: string }) => {
  return (
    <div className="AE-dynamic-toast">
      <div className="left">
        <Ban color="white" strokeWidth={2.5} size={30} />
      </div>
      <div className="right">
        <p className="toast-title">Error</p>
        <p className="toast-msg">{message}</p>
      </div>
    </div>
  );
};

const WarningToast = ({ message }: { message?: string }) => {
  return (
    <div className="AE-dynamic-toast">
      <div className="left">
        <AlertTriangle color="white" strokeWidth={2.5} size={30} />
      </div>
      <div className="right">
        <p className="toast-title">Warning</p>
        <p className="toast-msg">{message}</p>
      </div>
    </div>
  );
};

const SuccessToast = ({ message }: { message?: string }) => {
  return (
    <div className="AE-dynamic-toast">
      <div className="left">
        <CheckCircle2 color="white" strokeWidth={2.5} size={30} />
      </div>
      <div className="right">
        <p className="toast-title">Success</p>
        <p className="toast-msg">{message}</p>
      </div>
    </div>
  );
};

export const toast = {
  error: (message: string) =>
    toastify.error(ErrorToast({ message }), {
      icon: false,
      className: "AE-dynamic-toast-error-bg",
    }),
  warning: (message: string) =>
    toastify.warning(WarningToast({ message }), {
      icon: false,
      className: "AE-dynamic-toast-warning-bg",
    }),
  success: (message: string) =>
    toastify.success(SuccessToast({ message }), {
      icon: false,
      className: "AE-dynamic-toast-success-bg",
    }),
};
