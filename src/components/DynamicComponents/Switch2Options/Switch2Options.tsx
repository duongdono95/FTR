import React, { useState, useEffect } from "react";
import "./Switch2Options.scss";
import classNames from "classnames";

interface Switch2OptionsProps<T extends { toString(): string }>
  extends React.HTMLAttributes<HTMLDivElement> {
  options: T[];
  className?: string;
  activeOption?: T;
  onOptionClick?: (selectedOption: T) => void;
  width?: number;
}

const Switch2Options = <T extends { toString(): string }>(
  props: Switch2OptionsProps<T>
) => {
  const {
    activeOption,
    className,
    options,
    onOptionClick,
    width,
    ...restProps
  } = props;
  const [isActive, setIsActive] = useState<T>(activeOption ?? options[0]);
  const [comWidth, setComWidth] = useState(width ?? 80);
  useEffect(() => {
    if (activeOption !== undefined) {
      setIsActive(activeOption);
    }
  }, [activeOption]);

  return (
    <div
      style={{ width: comWidth }}
      className={classNames(className, "Switch2Options")}
      {...restProps}
    >
      {options.map((option, index) => (
        <div
          style={{
            width: isActive === option ? (comWidth * 2) / 3 : comWidth / 3,
          }}
          key={index}
          className={
            isActive === option
              ? `Switch2Options-option ${option.toString()} isActive `
              : `Switch2Options-option ${option.toString()}`
          }
          onClick={() => {
            setIsActive(options[index]);
            onOptionClick && onOptionClick(options[index]);
          }}
        >
          {isActive === option
            ? `${
                option.toString().charAt(0).toUpperCase() +
                option.toString().slice(1)
              }`
            : option.toString().charAt(0).toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Switch2Options;
