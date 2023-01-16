
import React, { useState } from 'react';
import Result from '../Result/Result';

function Form() {

  var text = "";
  const [isShown, setIsShown] = useState(true); // ocultar div con imagen y mostrar div respuesta
  const [newPropsText, setNewText]=React.useState(text)// guarda text en variable 

  const onClickButtonEncrypt = () => {
    const textGetElement=document.getElementsByClassName('txtInput')
    text=textGetElement[0].value
    text=text.toLowerCase();// Convierte todos los caracteres en minusculas
    const textArray = text.split("");
    for (let i=0; i< textArray.length ; i++){
      switch (textArray[i]){
        case "a":
          textArray[i]= "ai"
          console.log(text)
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
    text = textArray.toString()
    setNewText(text.replaceAll(',', ''))
    setIsShown(false);
  };

  const onClickButtonDecrypt = () => {
    const textGetElement=document.getElementsByClassName('txtInput')
    text=textGetElement[0].value
    text=text.toLowerCase();// Convierte todos los caracteres en minusculas
    text = text.replaceAll('ai', 'a');
    text = text.replaceAll('enter', 'e');
    text = text.replaceAll('imes', 'i');
    text = text.replaceAll('ober', 'o');
    text = text.replaceAll('ufat', 'u');
    setNewText(text)
    setIsShown(false);
  };

  const onSearchValueChange = (event) => {
    text=event.target.value
    setIsShown(true);
  };
  
  return (
    <div className="App">
      <div className='box-form'>
        <div className='input'>
          <input name="" id="" cols="30" rows="10" className='txtInput' onChange={onSearchValueChange}></input>
          <div className="buttons">
            <button className="btnEncript" onClick={onClickButtonEncrypt}><h1>Encriptar</h1></button>
            <button className="btnDesencript" onClick={onClickButtonDecrypt}><h1>Desencriptar</h1></button>
          </div>
        </div>
      </div>
      <Result
        isShown={isShown}
        newPropsText={newPropsText}
      />
    </div>
  )
}


export default Form;



