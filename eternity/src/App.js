import { BrowserRouter , Route, Routes, Link} from "react-router-dom";
//import './Employee.css';
import './App.css';
import Home from './Components/Pages/Home';
import React  from "react";
import Navbar from './Components/Navbar';
import { Button } from "./Components/Button";
import Treatment from './Components/Pages/Treatment';
// import Staff from './Components/Pages/Staff';
// import Employee from './Components/Pages/Employee';
// import RegistrationForm from "./Components/Registration";
import Login from "./Components/Pages/Login";
import Footer from "./Components/Footer";


 
function App() {

  return(
    <>
    <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Treatments" element={<Treatment/>}/>
           <Route path="/log-in" element={<Login />} />
        </Routes>
        <Footer/>
    </BrowserRouter>    
      </>
  );  
}
export default App;
