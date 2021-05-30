import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export function TitleBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4" component="h1">
          Look Back
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
