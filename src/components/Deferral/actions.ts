import { Dayjs } from "dayjs";
import { Actions, DeferralAction } from "./types";

export function changeType(type: string): DeferralAction {
  return {
    type: Actions.changeType,
    payload: type,
  };
}

export function changeNumber(number: string): DeferralAction {
  return {
    type: Actions.changeNumber,
    payload: number,
  };
}

export function changeCategory(category: string): DeferralAction {
  return {
    type: Actions.changeCategory,
    payload: category,
  };
}

export function changeDuration(duration: string): DeferralAction {
  return {
    type: Actions.changeDuration,
    payload: duration,
  };
}

export function changeDate(date: Dayjs | null): DeferralAction {
  return {
    type: Actions.changeDate,
    payload: date,
  };
}
