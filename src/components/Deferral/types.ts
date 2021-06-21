export type DeferralType = "MEL" | "CDL" | "NEF" | "";

export type DeferralCategory = "A" | "B" | "C" | "D" | "P" | "CDL" | "";

export interface DurationAttributes {
  value: "" | "3" | "10" | "120";
  disabled: boolean;
}
