import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  console.log("this is props",slides)
  const [index , setIndex] = useState(0)
  return (
    <>
    <div id='slide'>
     <h1 data-testid = "title">{index} : {slides[index].title}</h1>
     <p data-testid = "text">{slides[index].text}</p>
     </div>
     <div id='navigation'>
          <button disabled={index===0} onClick={()=>setIndex(0)}> Restart </button>
          <button disabled={index===slides.length-1} onClick={()=>setIndex(index+1)}> Next </button>
          <button disabled={index===0} onClick={()=>setIndex(index-1)}> Prev </button>
        
     </div>
    </>
  )
}

export default App;
