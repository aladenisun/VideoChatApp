import React from "react";
import "./App.scss";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/User/login";
import Status from "./Components/User/Status";
import Profile from "./Components/User/profile";
import Register from "./Components/User/register";
import Home from "./Components/Home";
import CallPage from "./Components/callPage";
import { Account } from "./Components/User/Accounts";
import Settings from "./Components/User/Settings";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogginActive: true,
    };
  }

  render() {
    return (
      <Router>
        <Account className="App">
          <Nav />
          <Status />
          {/* <Settings /> */}
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/callPage" component={CallPage} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/status" component={Status} />
            This is the App Page. This will be editted
          </Switch>
        </Account>
      </Router>
    );
  }
}
export default App;
