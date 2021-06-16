import { Dayjs } from "dayjs";

export type DeferralType = "MEL" | "CDL" | "NEF";
export type DeferralCategory = "A" | "B" | "C" | "D" | "P" | "CDL";

export interface DeferralState {
  title: string;
  subtitle: string;
  type: DeferralType | "";
  number: string;
  category: DeferralCategory | "";
  duration: string;
  date: Dayjs | null;
}

export interface DurationAttributes {
  value: "" | "3" | "10" | "120";
  disabled: boolean;
}
