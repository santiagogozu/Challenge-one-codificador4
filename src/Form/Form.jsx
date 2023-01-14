
import React, { useState } from 'react';
import Result from '../Result/Result';

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
      <Result
        isShown={isShown}
        newTodoValue={newTodoValue}
      />

    </div>
  )
}


export default Form;



