import { sideSchema } from "./GeneralTypes";

export const generalOptions = ["Option A", "Option B", "Option C"];
export const customerOptions = ["Customer A", "Option B", "Option C"];
export const sides = sideSchema.options.map((option) => option._def.value);
export const initialForm = {
  sink: generalOptions[0],
  source: generalOptions[0],
  expiry: generalOptions[0],
  side: sides[0],
  price: 0,
  volume: 0,
  customer: generalOptions[0],
};
