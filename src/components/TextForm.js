import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setWordCount(text.split(" ").filter((word) => word !== "").length);
    setCharCount(text.length);
  }, [text]);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Updated to UpperCase", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Listening to the text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setWordCount(text.split(" ").length);
    setCharCount(text.length);
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Updated to LowerCase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared the text", "success");
  };

  const textStyle = {
    backgroundColor: props.mode === "light" ? "white" : "#525252",
    color: props.mode === "light" ? "black" : "white",
  };

  console.log(props.mode);

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={textStyle}
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button
          className="btn btn-primary mx-3 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-3 my-2"
        >
          Listen
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {wordCount} words and {charCount} characters
        </p>
        <h2>Time to read this article</h2>
        <p>{0.008 * wordCount} minutes</p>
        <h2>Preview</h2>
        <p
          style={{
            width: "100%",
            backgroundColor: props.mode === "light" ? "#e0e0e0" : "#525252",
            color: props.mode === "light" ? "black" : "white",
            whiteSpace: "pre-wrap",
          }}
        >
          {text.length > 0 ? text : "Enter something on the above text area"}
        </p>
      </div>
    </>
  );
}
