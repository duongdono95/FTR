import React, { useState } from "react";
import "./OrderManagement.scss";
import DropDown from "../../../../components/DynamicComponents/DropDown/DropDown";
import Switch2Options from "../../../../components/DynamicComponents/Switch2Options/Switch2Options";
import InputComponent from "../../../../components/DynamicComponents/InputComponent/InputComponent";
import Button from "@mui/material/Button";
import {
  customerOptions,
  generalOptions,
  sides,
  initialForm,
} from "../../../../libs/constants";
import { Trash } from "lucide-react";
import { OMFormSchema, OMFormType } from "../../../../libs/GeneralTypes";
import { ZodIssue } from "zod";
import { toast } from "../../../../components/DynamicComponents/Toast/Toast";
import { MenuItem, TextField } from "@mui/material";
const OrderManagement = () => {
  const [form, setForm] = useState<OMFormType>(initialForm);
  const [error, setError] = useState<ZodIssue[]>();
  const handleCheckRequest = () => {
    const formCheck = OMFormSchema.safeParse(form);
    if (!formCheck.success) {
      const test = formCheck.error.issues;
      setError(test);
      toast.error("Something goes wrong, please check the Form again");
    } else {
      toast.custom(<Trash />);
    }
  };

  return (
    <div className="OrderManagement">
      <div className="container-title">Order Management</div>
      <div className="container-content">
        <div className="container-item">
          <p className="item-title">Sink:</p>
          {/* <TextField select defaultValue={generalOptions[0]}>
            {generalOptions.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField> */}
          <DropDown
            options={generalOptions}
            defaultValue={form.sink}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, sink: e.target.value }))
            }
          />
        </div>
        <div className="container-item">
          <p className="item-title">Source:</p>
          <DropDown
            options={generalOptions}
            defaultValue={form.source}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, source: e.target.value }))
            }
          />
        </div>
        <div className="container-item">
          <p className="item-title">Expiry Date:</p>
          <DropDown
            options={generalOptions}
            defaultValue={form.expiry}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, expiry: e.target.value }))
            }
          />
        </div>
        <div className="container-item">
          <p className="item-title">Side:</p>
          <Switch2Options
            options={sides}
            defaultValue={form.side}
            onOptionClick={(selectedOption) => {
              setForm((prev) => ({
                ...prev,
                side: selectedOption,
              }));
            }}
          />
        </div>
        <div className="container-item">
          <p className="item-title">Price:</p>
          <InputComponent
            type="number"
            value={form.price}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, price: Number(e.target.value) }));
              setError(undefined);
            }}
          />
        </div>
        <div className="error-messages">
          {error &&
            error.map((item) =>
              item.path.includes("price") ? <p>{item.message}</p> : ""
            )}
        </div>
        <div className="container-item">
          <p className="item-title">volume:</p>
          <InputComponent
            type="number"
            value={form.volume}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, volume: Number(e.target.value) }));
              setError(undefined);
            }}
          />
        </div>
        <div className="error-messages">
          {error &&
            error.map((item) =>
              item.path.includes("volume") ? <p>{item.message}</p> : ""
            )}
        </div>
        <div className="container-item">
          <p className="item-title">Customer:</p>
          <DropDown
            options={customerOptions}
            defaultValue={form.customer}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, customer: e.target.value }));
            }}
          />
        </div>
        <div className="container-item buttons-container">
          <div className="group-buttons left">
            <Button onClick={() => setForm(initialForm)}>Reset</Button>
            <Button>
              <span>
                <Trash size={16} />
              </span>
              Delete
            </Button>
          </div>
          <div className="group-buttons right">
            <Button
              variant="outlined"
              type="button"
              onClick={() => setForm(initialForm)}
            >
              Cancel
            </Button>
            <Button
              sx={{ color: "white" }}
              variant="contained"
              onClick={() => handleCheckRequest()}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
