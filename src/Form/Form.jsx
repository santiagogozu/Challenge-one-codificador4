import magnifying from '../assets/magnifying.png';
import React, { useState } from 'react';

function Form() {

  const [isShown, setIsShown] = useState(true);
  const [newTodoValue, setNewTodoValue]=React.useState('')

  var text = "";
  const onClickButtonEncrypt = () => {
    const textArray = text.split("");
    for (let i=0; i< textArray.length ; i++){
      switch (textArray[i]){
        case "a":
          textArray[i]= "ai"
          break
        case "e":
          textArray[i]= "enter"
          break
        case "i":
          textArray[i]= "imes"
          break
        case "o":
          textArray[i]= "ober"
          break
        case "u":
          textArray[i]= "ufat"
          break
        default:
          break         
      }
    }
    console.log(textArray.toString())
    text = textArray.toString()
    setNewTodoValue(text.replaceAll(',', ''))
    setIsShown(false);
  };

  const onClickButtonDecrypt = () => {
    text = text.replaceAll('ai', 'a');
    text = text.replaceAll('enter', 'e');
    text = text.replaceAll('imes', 'i');
    text = text.replaceAll('ober', 'o');
    text = text.replaceAll('ufat', 'u');
    setNewTodoValue(text)
  };

  const onSearchValueChange = (event) => {
    text=event.target.value;
    console.log(text)
  };
  
  return (
    <div>
      <input name="" id="" cols="30" rows="10" className='txtEncript' onChange={onSearchValueChange}></input>
      <div className="buttons">
        <button className="btnEncript" onClick={onClickButtonEncrypt}><h1>Encriptar</h1></button>
        <button className="btnDesencript"  onClick={onClickButtonDecrypt}><h1>Desencriptar</h1></button>
      </div>
      <div className="desencriptador" style={{display: isShown  ? '' : 'none' }}>
        <img src={magnifying} className='imgNot' alt="logo" />
        <div className='txtNotDeco'>
          <h1> Ningún mensaje fue encontrado.</h1>
          <h2>Ingresa el texto que desees encriptar o desencriptar.</h2>
        </div>
      </div>
      <div  className="result" style={{display: isShown  ? 'none' : '' }}>
          <h1>{newTodoValue}</h1>
      </div>
    </div>
  )
}


export default Form;


