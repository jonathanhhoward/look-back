import { AppBar, Container } from "@material-ui/core";

export function TitleBar() {
  return (
    <AppBar position="sticky">
      <Container>
        <h1>Look Back</h1>
      </Container>
    </AppBar>
  );
}
