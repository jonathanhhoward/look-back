import { ReactEventHandler } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export function DeleteButton(props: {
  id: string;
  onClick: ReactEventHandler;
}) {
  return (
    <IconButton
      aria-label="delete deferral"
      id={props.id}
      onClick={props.onClick}
    >
      <DeleteIcon />
    </IconButton>
  );
}
