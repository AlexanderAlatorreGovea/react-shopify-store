import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Header from "./components/Header/Header";

import "./index";
import AuthContext from "./context/auth-context";

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="blog" component={BlogPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
    </Router>
  );
}

export default App;
