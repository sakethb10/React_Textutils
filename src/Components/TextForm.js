import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText]=useState('')
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleCamClick=()=>{
        let str=text.toLowerCase();
        let newStr=str.split(' ').map((word)=>{
            if(word.length>1){
                return word.charAt(0).toUpperCase()+word.slice(1);
            }
            return word;
        }).join(' ');
        setText(newStr);
    }
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    const wordCount=()=>{
        let count=0;
        if(text.length===0){
            return count;
        }
        let textArr=text.split(' ');
        for(let word of textArr){
            if(word.length>0){
                count++;
            }
        }
        return count;
    }
    return (
        <div>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
                    <button className='btn btn-primary my-3 mx-3' onClick={handleUpClick}>Convert To Uppercase</button>
                    <button className='btn btn-primary my-3 mx-3' onClick={handleCamClick}>Convert To Camelcase</button>
                </div>
            </div>
            <div className='container'>
                <h1>Text Stats</h1>
                <p>{wordCount()} words and {text.length} characters</p>
                <p>Read in {text.length===0?0:0.008*text.split(' ').length} minutes</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
