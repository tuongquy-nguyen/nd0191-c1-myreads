import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
