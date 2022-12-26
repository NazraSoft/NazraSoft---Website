import { atom } from "recoil";

export const priceState = atom({
  key: "priceState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});