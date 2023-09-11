import React from "react";
import "./OrderManagement.scss";
import DropDown from "../../../../components/DynamicComponents/DropDown/DropDown";
import Switch2Options from "../../../../components/DynamicComponents/Switch2Options/Switch2Options";
import InputComponent from "../../../../components/DynamicComponents/InputComponent/InputComponent";
import Button from "@mui/material/Button";
const OrderManagement = () => {
  return (
    <div className="OrderManagement">
      <div className="container-title">Order Management</div>
      <div className="container-content">
        <div className="container-item">
          <p className="item-title">Sink:</p>
          <DropDown options={["Option A", "Option B", "Option C"]} />
        </div>
        <div className="container-item">
          <p className="item-title">Source:</p>
          <DropDown options={["Option A", "Option B", "Option C"]} />
        </div>
        <div className="container-item">
          <p className="item-title">Expiry Date:</p>
          <DropDown options={["Option A", "Option B", "Option C"]} />
        </div>
        <div className="container-item">
          <p className="item-title">Side:</p>
          <Switch2Options options={["Buy", "Sell"]} />
        </div>
        <div className="container-item">
          <p className="item-title">Price:</p>
          <InputComponent type="number" />
        </div>
        <div className="container-item">
          <p className="item-title">Volumn:</p>
          <InputComponent type="number" />
        </div>
        <div className="container-item">
          <p className="item-title">Customer:</p>
          <DropDown options={["Customer A", "Option B", "Option C"]} />
        </div>
      </div>
      <div className="container-content">
        <Button type="button">Cancel</Button>
        <Button type="submit">Post</Button>
      </div>
    </div>
  );
};

export default OrderManagement;
