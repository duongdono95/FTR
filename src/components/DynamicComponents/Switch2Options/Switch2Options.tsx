import React, { useState, useEffect } from "react";
import "./Switch2Options.scss";
import classNames from "classnames";

interface Switch2OptionsProps extends React.HTMLAttributes<HTMLDivElement> {
  options: string[];
  className?: string;
  activeOption?: string;
  onOptionClick?: (selectedOption: string) => void;
}

const Switch2Options = React.forwardRef<HTMLDivElement, Switch2OptionsProps>(
  ({ activeOption, className, options, onOptionClick, ...props }, ref) => {
    const combinedClassNames = classNames(className, "Switch2Options");
    const [isActive, setIsActive] = useState(activeOption ?? options[0]);
    useEffect(() => {
      if (activeOption) {
        setIsActive(activeOption);
      }
    }, [activeOption]);
    return (
      <div className={combinedClassNames} ref={ref} {...props}>
        {options.map((option, index) => {
          return (
            <option
              key={index}
              className={
                isActive === option
                  ? `Switch2Options-option ${option} isActive `
                  : `Switch2Options-option ${option}`
              }
              value={option}
              onClick={() => {
                setIsActive(options[index]);
                if (onOptionClick) {
                  onOptionClick(options[index]);
                }
              }}
            >
              {isActive === option
                ? `${option.charAt(0).toUpperCase() + option.slice(1)}`
                : option.charAt(0).toUpperCase()}
            </option>
          );
        })}
      </div>
    );
  }
);
Switch2Options.displayName = "Switch2Options";
export default Switch2Options;
