import { Dayjs } from "dayjs";

export type DeferralType = "MEL" | "CDL" | "NEF" | "";

export type DeferralCategory = "A" | "B" | "C" | "D" | "P" | "CDL" | "";

export interface DeferralState {
  title: string;
  subtitle: string;
  type: DeferralType;
  number: string;
  category: DeferralCategory;
  duration: string;
  date: Dayjs | null;
}

export interface DurationAttributes {
  value: "" | "3" | "10" | "120";
  disabled: boolean;
}

export enum Actions {
  changeType = "CHANGE_TYPE",
  changeNumber = "CHANGE_NUMBER",
  changeCategory = "CHANGE_CATEGORY",
  changeDuration = "CHANGE_DURATION",
  changeDate = "CHANGE_DATE",
}

interface StringAction {
  type:
    | Actions.changeType
    | Actions.changeNumber
    | Actions.changeCategory
    | Actions.changeDuration;
  payload: string;
}

interface DayjsAction {
  type: Actions.changeDate;
  payload: Dayjs | null;
}

export type DeferralAction = StringAction | DayjsAction;
