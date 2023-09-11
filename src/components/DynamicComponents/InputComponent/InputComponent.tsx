import React from "react";
import "./InputComponent.scss";
interface InputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: number | string;
  label?: string;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
  ({ defaultValue, label, ...props }, ref) => {
    return (
      <div className="input-component">
        {label && <label htmlFor="input-component">{label}</label>}
        <input ref={ref} id="input-component" min={0} {...props} />
      </div>
    );
  }
);
InputComponent.displayName = "InputComponent";
export default InputComponent;
