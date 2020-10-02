import React from "react";
import "./App.scss";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/User/login";
import Status from "./Components/User/Status";
// import Profile from "./Components/User/profile";
import Register from "./Components/User/register";
import Home from "./Components/Home";
import CreateRoom from "./Components/Call/Join/Join";
import Chat from "./Components/Call/Chat/Chat";
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
          <Route exact path="/joinRoom" component={CreateRoom} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/status" component={Status} />
          <Switch>
            This is the App Page. This will be editted
          </Switch>
        </Account>
      </Router>
    );
  }
}
export default App;
