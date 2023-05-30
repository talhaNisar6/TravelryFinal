import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import NavBar from './Components/Header/Header.js';
import Footer from "./Components/Header/Footer.js";
import Hotels from "./Components/Pages/Hotels/Hotels.js";
import Login from "./Components/Pages/SignProcess/Login.js";
import Place from "./Components/Pages/Place/Place.js";
import ToDo from "./Components/Pages/ToDo/ToDo";
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/toDo" Component={ToDo}/>
        <Route path="/Hotels" Component={Hotels}/>
        <Route path="/signin" Component={Login}/>
        <Route path="/places" Component={Place}/>
      </Routes>
      <div><Footer/></div>
    </Router>
  );
}

export default App;
