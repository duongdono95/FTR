import React from "react";
import { User, LogOut } from "lucide-react";
import "./PageHeader.scss";
import IconWithMessage from "../../DynamicComponents/IconWithMessage/IconWithMessage";
const PageHeader = () => {
  return (
    <div className="PageHeader">
      <div className="content">
        <p>Aotearoa Energy</p>
        <div className="right">
          <IconWithMessage message="Daniel Skipper">
            <User size={20} color="#333" />
          </IconWithMessage>
          <LogOut />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
