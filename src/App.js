import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      document.body.style.color = "#ffffff";
      showAlert("Bro Dark mode is enabled", " success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "black";
      showAlert("Bro Light mode is enabled", " success ");
    }
  };
  return (
    <Router>
      <Navbar title="Brand" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          {/* <TextForm showAlert={showAlert} heading=" Enter Text" /> */}
          <Route
            exact
            path="/"
            element={<TextForm showAlert={showAlert} heading=" Enter Text" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
