import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
 import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState('null'); 

  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("null")
    }, 1000);
  }
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#03133a';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'Textutiles - Dark mode Enabled'
      // setInterval(() => {
      //   document.title = 'Textutiles - is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Textutiles - Install now'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'Textutiles - Light mode Enabled'
   }
  }
  return (
    <>
{/* <Router> */}
{/* <Navbar title="TextUtils" AboutText = "About TextUtils" /> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className = "container my-3">
     {/* <Routes> */}
      {/* / users --> component1
      /users/home --> component2 */}
          {/* <Route exact path="/about" element = {<About />} /> */} 
          {/* <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}/> */}
           <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
    {/* </Routes> */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;
