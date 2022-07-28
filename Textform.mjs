import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick =()=>{
  //  console.log('UpperCase Was Clicked'+ text);
   let newText= text.toUpperCase();
   setText(newText);
  }
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  const handleDownClick =()=>{
    // console.log("LowerCase Was Clicked");
    let newText2=text.toLowerCase();
    setText(newText2);
  }
  const handleToClear =()=>{
    let newText3='';
    setText(newText3);
  }

 
  
  const [text, setText] = useState('Enter your Text here');
      // setText=('Enter your details Karan');            
  return (
    <>
  <div className='container'>
  <h1>{props.heading} </h1>
  <label htmlFor="myBox" className="form-label">{props.text}</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>   
  <button className='btn btn-primary mx-3' onClick={handleDownClick}>toLower</button>
  <button className='btn btn-primary mx-3' onClick={handleToClear}>Clear </button>
  
  

</div>
<div className='container'>
<h1>Your text summary</h1>
<p>your {text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 *text.split(" ").length} minutes to read </p>
<h3>Preview</h3>
<p>{text}</p>
</div>
</>

  )
}

