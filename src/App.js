import { useState } from 'react';
import React from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title="Textutils-Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title="Textutils-Light Mode";
    }
  }
  return (
    <>
      {/* <NavBar title="Textutils" aboutText="About Textutils" />  */}
      {/*<NavBar/> */}
      <Router>
        {/* <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users ---> Component 1
    /users/home ---> Component 2 */}
            <Route exact path="/about"
              element={<About mode={mode} />} >
            </Route>
            <Route exact path="/" element={<TextForm
              showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />}>

            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
