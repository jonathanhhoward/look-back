import { categoryMap } from "./datasets";
import {
  Actions,
  DeferralAction,
  DeferralCategory,
  DeferralState,
  DeferralType,
} from "./types";

export function reducer(
  state: DeferralState,
  action: DeferralAction
): DeferralState {
  switch (action.type) {
    case Actions.changeType:
      return {
        ...state,
        title: action.payload,
        type: action.payload as DeferralType,
        category: "",
        duration: "",
        date: null,
      };
    case Actions.changeNumber:
      return {
        ...state,
        subtitle: action.payload,
        number: action.payload,
      };
    case Actions.changeCategory: {
      const category = action.payload as DeferralCategory;
      return {
        ...state,
        category,
        duration: categoryMap.get(category)?.value ?? "",
      };
    }
    case Actions.changeDuration: {
      const number = Number(action.payload);
      return {
        ...state,
        duration: number >= 1 ? Math.floor(number).toString() : "1",
      };
    }
    case Actions.changeDate:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
}
