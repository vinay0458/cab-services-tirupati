import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from "./components/Contact";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <div className="app_homepage">
              <Home />
            </div>
          </Route>
          <Route path='/contact'>
            <div className="app__contactResultspage">
              <Contact/>
            </div>
          </Route>
          <Route path='/'>
            <div className="app_homepage">
              <Home />
            </div>
          </Route>
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
