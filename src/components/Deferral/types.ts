export type DeferralType = "MEL" | "CDL" | "NEF";
export type DeferralCategory = "A" | "B" | "C" | "D" | "P" | "CDL";

export interface DeferralState {
  type: DeferralType | "";
  number: string;
  category: DeferralCategory | "";
  duration: string;
}

export interface DurationAttributes {
  value: "" | "3" | "10" | "120";
  disabled: boolean;
}
