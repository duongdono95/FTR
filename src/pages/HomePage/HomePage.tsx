import React from "react";
import PageHeader from "../../components/SiteComponents/PageHeader/PageHeader";
import "./HomePage.scss";
import OrderManagement from "./component/OrderManagement/OrderManagement";
const HomePage = () => {
  return (
    <div className="HomePage">
      <PageHeader />
      <div className="page-content">
        <div className="table"></div>
        <div className="order-management-wrapper">
          <OrderManagement />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
