import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import Rahnama from "./components/Rahnama";
import Faq from "./components/Faq";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import { JWTCheck, JWTValidate } from "./components/services/Auth";
import secureStorage from "./components/services/Storage";
import { useStoreState, useStoreActions } from "easy-peasy";

function App() {
  const logedIn = useStoreState(state => state.auth.logedIn);
  const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);
  const setEmail = useStoreActions(actions => actions.auth.setEmail);
  const setNiceName = useStoreActions(actions => actions.auth.setNiceName);
  const islogedIn = () => {
    console.log("Authenticating ... ");
    JWTValidate()
      .then(res => {
        console.log(res);
        if (!(logedIn === true) && res.status === 200) {
          setLogedIn(true);
          setEmail(secureStorage.getItem("email"));
          setNiceName(secureStorage.getItem("niceName"));
        }
      })
      .catch(e => {
        console.log(e);
        secureStorage.clear();
        setLogedIn(false);
        setEmail("");
        setNiceName("");
      });
  };

  useEffect(() => {
    islogedIn();
  });

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        islogedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/wordpress/login" />
        )
      }
    />
  );

  const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        islogedIn ? <Component {...props} /> : <Redirect to="/wordpress/" />
      }
    />
  );

  return (
    <>
      <Router>
        <Switch>
          <Shop exact path="/wordpress/" />
          <Rahnama path="/wordpress/guide" />
          <ContactUs path="/wordpress/contact-us" />
          <Faq path="/wordpress/faq" />

          <PrivateRoute path="/wordpress/Dashboard" component={Dashboard} />
          <AuthenticatedRoute path="/wordpress/login" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
