import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#042743'
      showAlert("Dark mode is enabled", "success")
    } else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode is enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter your text for Analyze below" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;