import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import './App.css';
import Home from './pages/home';
import News from './pages/news';
import Contact from "./pages/kontakt";
import About from "./pages/about";
import Menu from "./components/menu";
import Services from "./pages/services";
import Login from "./components/login";
import Logout from "./components/logout";
import Forum from "../src/pages/forum";


function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/news' Component={News}/>
          <Route path='/kontakt' Component={Contact}/>
          <Route path='/about' Component={About}/>
          <Route path='/services' Component={Services}/>
          <Route path='/forum' Component={Forum}/>
          <Route path='/login' Component={Login}/>
          <Route path='/logout' Component={Logout}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
