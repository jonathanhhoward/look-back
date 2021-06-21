import { DeferralCategory, DeferralType } from "../types";
import { categoryMap } from "../utils";
import { DeferralAction, DeferralState } from "./types";

export function reducer(
  state: DeferralState,
  action: DeferralAction
): DeferralState {
  switch (action.type) {
    case "CHANGE_TYPE":
      return {
        ...state,
        title: action.payload,
        type: action.payload as DeferralType,
        category: "",
        duration: "",
        date: null,
      };
    case "CHANGE_NUMBER":
      return {
        ...state,
        subtitle: action.payload,
        number: action.payload,
      };
    case "CHANGE_CATEGORY": {
      const category = action.payload as DeferralCategory;
      return {
        ...state,
        category,
        duration: categoryMap.get(category)?.value ?? "",
      };
    }
    case "CHANGE_DURATION": {
      const number = Number(action.payload);
      return {
        ...state,
        duration: number >= 1 ? Math.floor(number).toString() : "1",
      };
    }
    case "CHANGE_DATE":
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
}
