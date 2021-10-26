import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import ChatScreen from "./screens/chat-screen/chat-screen";
import LoginScreen from "./screens/login-screen/login-screen";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Router>
        <Navbar user={user} setUser={setUser} />

        <Switch>
          <Route path="/chat">
            <ChatScreen user={user} setUser={setUser} />
          </Route>

          <Route path="/">
            <LoginScreen user={user} setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
