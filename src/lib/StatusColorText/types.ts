export enum Status {
  okay = "success.main",
  due = "warning.main",
  overdue = "error.main",
}

export type StatusColor = Status.okay | Status.due | Status.overdue | undefined;

export type TextColor = "primary.contrastText" | undefined;
