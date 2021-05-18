import { AppBar, Toolbar, Typography } from "@material-ui/core";

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
