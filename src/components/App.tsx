import { Route, Switch } from "react-router-dom";
import { routes } from "lib/routes";

function App() {
  return (
    <>
      <Switch>
        {routes.map(({ path, page, exact }, index) => (
          <Route key={index} exact={exact} path={path} component={page}></Route>
        ))}
      </Switch>
    </>
  );
}

export default App;
