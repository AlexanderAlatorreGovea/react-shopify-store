import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import "./index";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="blog" component={BlogPage} />
      </Switch>
    </Router> 
  );
}

export default App;
