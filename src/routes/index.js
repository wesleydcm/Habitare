import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Achievements from "../pages/Achievements";
import Groups from "../pages/Groups";
import NotFound from "../pages/NotFound";
import { useContext } from "react";
import { UserContext } from "../providers/User";
import Group from "../pages/Group";

const Routes = () => {
  const { authenticated } = useContext(UserContext);
  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login authenticated={authenticated}></Login>
      </Route>
      <Route path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route path="/dashboard">
        <Dashboard authenticated={authenticated} />
      </Route>
      <Route path="/achievements">
        <Achievements authenticated={authenticated} />
      </Route>
      <Route path="/groups" exact>
        <Groups authenticated={authenticated} />
      </Route>
      <Route path="/groups/search">
        <Groups authenticated={authenticated} />
      </Route>
      <Route path="/groups/:id">
        <Group authenticated={authenticated} />
      </Route>
      <Route path="/404">
        <NotFound />
      </Route>
      <Redirect to="/404" />


    </Switch>
  );
};

export default Routes;
