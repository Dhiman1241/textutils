import React, {useState} from 'react';



export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!" , "success")
    }

    const handleLoClick= ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!" , "success")
    }

    const handleClearClick= ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!" , "success")
    }

    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
// credits :coding vala
    const handleExtraSpaces = () =>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Extra spaces removed!" , "success")
    }

    //credits :A
    const handleCopy =() =>{
        let text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!" , "success")
    }
    


    const [text, setText] = useState('');
     // text = "new text"; //wrong way to change the state
     // setText("new text"); // correct way to change the state
  return (
    <>
    <div className= "container" style={{color: props.mode==='dark'?'white':'#03133a'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color :  props.mode==='dark'?'white':'#03133a'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1"  onClick= {handleUpClick} >Covert to Uppercase</button>
    <button className="btn btn-primary mx-1"  onClick= {handleLoClick} >Covert to Lowercase</button>
    <button className="btn btn-primary mx-1"  onClick= {handleClearClick} >Clear text</button>
    <button className="btn btn-primary mx-1"  onClick= {handleCopy} >Copy text</button>
    <button className="btn btn-primary mx-1"  onClick= {handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container  my-3" style={{color: props.mode==='dark'?'white':'#03133a'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in the textbook to preivew it here "}</p>
    </div>
    </>
  )
}
