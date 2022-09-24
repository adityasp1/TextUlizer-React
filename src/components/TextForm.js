import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log('Lowercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log('Clear Text' + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared!", "success");
    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
        props.showAlert("Your file has been downloaded.e!", "success");

    }

    const FirstCap = () => {
        let newArr = text.split(" ");
        let updatedArr = newArr.map((word) => {
            word = word.charAt(0).toUpperCase() + word.slice(1);
            return word;
        });
        setText(updatedArr.join(" "));
        props.showAlert("Converted to FirstCap!", "success");

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed!", "success");

    }
  
     const handleOnChange = (event) => {
        console.log('OnChange');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':' #042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode==='dark'?'white':' #042743' }} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={downloadTxtFile}>Download Text</button>
                <button className="btn btn-primary mx-1" onClick={FirstCap}>First Capital</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview! "}</p>
            </div>

            
        </>
    )
}
