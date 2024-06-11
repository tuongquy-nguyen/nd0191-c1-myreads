import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </div>
    </Router>
  );
}

export default App;
