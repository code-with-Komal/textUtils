import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0b0923'
      showAlert("Dark Mode Enabled","success");
      document.title="TextUtils-Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Enabled","success");
      document.title="TextUtils-Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />} /> */}
      {/* <Route exact path="/" element={<Textform heading="Enter text here to analyse" mode={mode} alert={alert} showAlert={showAlert}/>}/> */}
      <Textform heading="Enter text here to analyse" mode={mode} alert={alert} showAlert={showAlert}/>
      {/* </Routes> */}
      </div>
      {/* </Router>     */}
    </>
  );
}

export default App;
