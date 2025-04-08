import './index.css';
import { useState } from 'react';


function Square() {
  
    console.log('clicked!');
    const [value, setValue] = useState(null);
  return <button className="square">{value}</button>;
  
  function handleClick() {
    setValue('X');
}


return (
  <button
    className="square"
    onClick={handleClick}
  >
    {value}
  </button>
);
}

export default function Board(){
  return(
<>
<div className = "board-row">
<Square  />
        <Square />
        <Square />
 </div>

 <div className = "board-row">
 <Square  />
        <Square />
        <Square />
 </div>

 <div className = "board-row">
 <Square  />
        <Square />
        <Square />
 </div>

  </>

  );

  
}