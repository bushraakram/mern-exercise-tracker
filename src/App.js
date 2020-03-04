import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import ExerciseList from "./components/ExerciseList.js";
import EditExercise from "./components/EditExercise.js";
import CreateUser from "./components/CreateUser.js";
import CreateExercise from "./components/CreateExercise.js";



function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <Switch>
    <Route path="/" exact component={ExerciseList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user"  component={CreateUser} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
