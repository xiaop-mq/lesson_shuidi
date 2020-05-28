import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import XXX from './BrowseRouter';
import Router from './BrowseRouter';
import Route from './Route';
import Link from './Link';

let isLogin = true;

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
             { isLogin && <Link to="/users">Users</Link> } 
            </li>
          </ul>
        </nav>
        {/* 动态路由：51信用卡 */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch> */}
          <Route path="/about">
            <About />
          </Route>
          {
          isLogin && 
            <Route path="/users">
              <Users />
            </Route>
          }
          <Route path="/">
            <Home />
          </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  // 
  // return <h2>Users</h2>;
  return (
    <React.Fragment>
     user
      <Route path="/users/id">
        <Id />
      </Route>
    </React.Fragment>
  )
}
function Id() {
  return 'ID'
}