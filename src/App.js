import {
  Switch,
  Route
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import { useLocation } from 'react-router-dom'

import Home from './Home'
import Resume from './Resume'
import ReviewWebsite from './ReviewWebsite'
import MinecraftServer from "./MinecraftServer";


function App() {
  const location = useLocation()
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>

        <Route exact path={["/", "/Home"]}>
          <Home />
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>

        <Route exact path="/reviewwebsite">
          <ReviewWebsite />
        </Route>

        <Route exact path="/twitchmcserver">
          <MinecraftServer />
        </Route>

      </Switch>
    </AnimatePresence>
  );
}


export default App;
