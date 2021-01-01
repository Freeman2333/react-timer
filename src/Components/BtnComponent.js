import React from 'react';

function BtnComponent(props) {
  return (
    <div>
        <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.startBtnClick}>{props.startBtnText}</button> 
        <button className="stopwatch-btn stopwatch-btn-red"
        onClick={props.waitBtnClick}>Wait</button>
        <button className="stopwatch-btn stopwatch-btn-yel"
        onClick={props.reset}>Reset</button>
    </div>
  );
}

export default BtnComponent;