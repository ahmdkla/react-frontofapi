import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  Home,
  About,
  Contact,
  UserPost,
  Users,
  Header,
  SignIn,
  SignUp,
  SubjectMongoose,
  SubjectSequelize,
  Subject,
  SubjectMysql
} from "./components";

function App() {
  
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/users" exact={true}>
          <Users />
        </Route>
        <Route path="/users/:userId">
          <UserPost />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/subject">
          <Subject />
        </Route>
        <Route path="/subjectMongoose">
          <SubjectMongoose />
        </Route>
        <Route path="/subjectMysql">
          <SubjectMysql />
        </Route>
        <Route path="/subjectSequelize">
          <SubjectSequelize />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
