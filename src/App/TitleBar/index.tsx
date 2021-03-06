import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Refresh from "@material-ui/icons/Refresh";
import { useStyles } from "App/TitleBar/styles";

export function TitleBar() {
  const classes = useStyles();

  function clearAppState() {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4" component="h1" className={classes.title}>
          Look Back
        </Typography>
        <IconButton aria-label="reset page" onClick={clearAppState}>
          <Refresh className={classes.refresh} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
