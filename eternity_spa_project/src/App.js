import { BrowserRouter , Route, Routes, Link} from "react-router-dom";
//import './Employee.css';
import './App.css';
import Home from './Components/Pages/Home';
import React  from "react";
import Navbar from './Components/Navbar';
import { Button } from "./Components/Button";
import Treatment from './Components/Pages/Treatment';
import Staff from './Components/Pages/Staff';
import Employee from './Components/Pages/Employee';
import RegistrationForm from "./Components/Registration";
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
          <Route path="/Staff" element={<Staff />}/>
          <Route exact path="/employee1" element={<Employee src={process.env.PUBLIC_URL + "images/doctor7.jpg"} name="James Thomas"/>} />
          <Route exact path="/employee2" element={<Employee src={process.env.PUBLIC_URL + "images/doctor2.jpg"} name="Tina Cortez" />} />
          <Route exact path="/employee3" element={<Employee src={process.env.PUBLIC_URL + "images/doctor3.jpg"} name="Joe Wilson" />} />
          <Route exact path="/employee4" element={<Employee src={process.env.PUBLIC_URL + "images/doctor4.jpg"} name="Kimberly Johnson" />} />
          <Route exact path="/employee5" element={<Employee src={process.env.PUBLIC_URL + "images/doctor5.jpg"} name="Timothy Dawkins" />} />
          <Route exact path="/employee6" element={<Employee src={process.env.PUBLIC_URL + "images/doctor6.jpg"} name="Cynthia Williams" />} />
          <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
          <Route path="/log-in" element={<Login />} />
        </Routes>
        <Footer/>
    </BrowserRouter>    
      </>
  );  
}
export default App;
