import React from "react";
import "./App.scss";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/User/login";
import Profile from "./Components/profile";
import Register from "./Components/User/register";
import Home from "./Components/Home";

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
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            This is the App Page
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
