import React, { useState } from 'react'


export default function Textform(props) {
    const [text,setText] = useState('');
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleClear=()=>{
        setText('')
        props.showAlert("Cleared text","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleChange} rows="8" style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'#0b0923'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(' ').filter(word => word !== '').length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
