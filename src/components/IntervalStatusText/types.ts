export enum Status {
  okay = "success.main",
  due = "warning.main",
  overdueText = "error.contrastText",
  overdueBg = "error.main",
}

export type StatusColor =
  | Status.okay
  | Status.due
  | Status.overdueText
  | undefined;

export type StatusBgcolor = Status.overdueBg | undefined;
