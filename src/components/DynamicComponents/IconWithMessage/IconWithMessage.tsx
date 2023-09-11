import React from "react";
import "./IconWithMessage.scss";
interface IconWithMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  message?: string | number;
  bgColor?: string;
}

const IconWithMessage = React.forwardRef<HTMLDivElement, IconWithMessageProps>(
  ({ children, message, bgColor, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className="IconWithMessage">
        <div
          style={{ backgroundColor: `${bgColor ? bgColor : "white"}` }}
          className="IconWithMessage-icon"
        >
          {children}
        </div>
        {message && <span>{message}</span>}
      </div>
    );
  }
);
IconWithMessage.displayName = "IconWithMessage";
export default IconWithMessage;
