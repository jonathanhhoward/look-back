import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    title: {
      flexBasis: "50%",
    },
    subtitle: {
      color: palette.text.secondary,
    },
    input: {
      width: "100%",
    },
    splitInput: {
      width: "50%",
    },
  })
);
