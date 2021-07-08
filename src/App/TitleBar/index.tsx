import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Refresh from "@material-ui/icons/Refresh";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

export function TitleBar() {
  const classes = useStyles();

  function handleReset() {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4" component="h1" className={classes.title}>
          Look Back
        </Typography>
        <IconButton aria-label="reset page" onClick={handleReset}>
          <Refresh />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
