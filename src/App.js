import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import Home from './Home'
import Resume from './Resume'


function App() {
  return (
    <Router>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch>
          <Route exact path={["/", "/Home"]}>
            <Home />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}


export default App;
