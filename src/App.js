import { Route, Switch } from "react-router-dom";
import "./App.css";
import QuickStart from "./components/QuickStart";
import CreateJobs from "./CreateJobs";
import Plans from "./Plans";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={QuickStart} />
      <Route path="/plans" component={Plans} />
      <Route path="/create-jobs" component={CreateJobs} />
    </Switch>
  );
}

export default App;
