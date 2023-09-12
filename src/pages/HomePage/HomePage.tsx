import React from "react";
import PageHeader from "../../components/SiteComponents/PageHeader/PageHeader";
import "./HomePage.scss";
import OrderManagement from "./component/OrderManagement/OrderManagement";
import DropZone from "./component/DropZone/DropZone";
const HomePage = () => {
  return (
    <div className="HomePage">
      <PageHeader />
      <div className="page-content">
        <div className="left">
          <div className="table"></div>
        </div>
        <div className="right">
          <OrderManagement />
          <DropZone />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
