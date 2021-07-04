import {
  DeferralCategory,
  DeferralType,
  DurationAttributes,
} from "App/Deferral/types";

export const types: DeferralType[] = ["MEL", "CDL", "NEF"];

export const typeMap = new Map<DeferralType, DeferralCategory[]>([
  ["MEL", ["A", "B", "C", "D"]],
  ["CDL", ["CDL"]],
  ["NEF", ["P"]],
]);

export const categoryMap = new Map<DeferralCategory, DurationAttributes>([
  ["A", { value: "", disabled: false }],
  ["B", { value: "3", disabled: true }],
  ["C", { value: "10", disabled: true }],
  ["D", { value: "120", disabled: true }],
  ["P", { value: "120", disabled: false }],
  ["CDL", { value: "120", disabled: false }],
]);
