import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/home" element = {<Home/>}/>
        <Route path = "login" element={<Login/>}/>
        <Route path = "register" element ={<Register/>}/>
        <Route path = "profile" element = {<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App;
