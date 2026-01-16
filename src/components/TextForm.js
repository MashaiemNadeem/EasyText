import React, { useState } from "react";

export default function TextForm({ heading = "Enter Some Thing",showAlert }) {
  const upClick = () => {
    // console.log("The buttn click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase!", "success");
  };

  const loClick = () => {
    // console.log("The buttn click" + text);
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to Lowercase!", "success");

  };
  const clClick = () => {
    // console.log("The buttn click" + text);
    let newText = '';
    setText(newText);
    showAlert("Text clear", "success");

  };
  const upChange = (event) => {
    // console.log("The up change");
    setText(event.target.value);
  };

  // remove extrea space
  const removeExtraSpaces = ()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    showAlert("Extra Space Remove", "success");

  }
  // speak
  const speak =()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  // speak

  const [text, setText] = useState("");


  let place ={
    backgroundColor: 'lightgrey',
  }
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{heading}</h1>

          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={place}
            value={text}
            onChange={upChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={upClick}>Convert To Uppercase  </button>
        <button className="btn btn-primary mx-2" onClick={loClick}>Convert To Lowercase  </button>
        <button className="btn btn-primary mx-2" onClick={clClick}>Clear text  </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Space  </button>
        <button className="btn btn-primary mx-2" onClick={speak}>Speak 🔊 </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} Word and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length}Minuites to read this.</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text To Previwe"}</p>
      </div>
    </>
  );
}
