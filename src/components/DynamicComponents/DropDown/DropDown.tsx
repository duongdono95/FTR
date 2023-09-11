import React from "react";
import "./DropDown.scss";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any;
}

const DropDown = React.forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options, defaultValue, children, ...props }, ref) => {
    return (
      <select ref={ref} className="default-dropdown" {...props}>
        {options.map((option: any, index: number) => {
          return (
            <option key={option}>
              {option.charAt(0).toUpperCase()}
              {option.slice(1)}
            </option>
          );
        })}
      </select>
    );
  }
);
DropDown.displayName = "DropDown";
export default DropDown;
