import { Dayjs } from "dayjs";
import { DeferralCategory, DeferralType } from "../types";

export interface DeferralState {
  title: string;
  subtitle: string;
  type: DeferralType;
  number: string;
  category: DeferralCategory;
  duration: string;
  date: Dayjs | null;
}

interface StringAction {
  type: "CHANGE_TYPE" | "CHANGE_NUMBER" | "CHANGE_CATEGORY" | "CHANGE_DURATION";
  payload: string;
}

interface DayjsAction {
  type: "CHANGE_DATE";
  payload: Dayjs | null;
}

export type DeferralAction = StringAction | DayjsAction;

export type DeferralDispatch = (action: DeferralAction) => void;
