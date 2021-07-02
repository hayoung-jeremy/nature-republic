import { Route, Switch } from "react-router-dom";
import { routes } from "lib/routes";
import { ThemeProvider } from "styled-components";

// custom
import { colorTheme } from "assets/styles/theme";

function App() {
  return (
    <ThemeProvider theme={colorTheme}>
      <Switch>
        {routes.map(({ path, page, exact }, index) => (
          <Route key={index} exact={exact} path={path} component={page}></Route>
        ))}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
