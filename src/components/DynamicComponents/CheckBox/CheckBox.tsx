import React, { useState, useEffect } from "react";
import "./CheckBox.scss";
import { Check } from "lucide-react";

interface CheckBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isSelected?: boolean;
}

const CheckBox = React.forwardRef<HTMLDivElement, CheckBoxProps>(
  ({ isActive, isSelected, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(isSelected ? isSelected : false);
    const activeComponent = isActive ?? true;
    useEffect(() => {
      setIsChecked(isSelected ?? false);
    }, [isSelected]);
    return (
      <div
        ref={ref}
        className="checkbox"
        onClick={() => setIsChecked(!isChecked)}
        {...props}
      >
        {activeComponent === true ? (
          <Check
            size={20}
            strokeWidth={4}
            color={isChecked ? "#ff6565" : "#ff656500"}
          />
        ) : null}
      </div>
    );
  }
);
CheckBox.displayName = "CheckBox";
export default CheckBox;
