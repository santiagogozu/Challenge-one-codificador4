import magnifying from './magnifying.png';

function App() {
  

  const onClickButton = () => {
    console.log("holaaa")
    return 1
  };

  return (
    <div className="App">
      <div className="prueba">
      <header className="App-header">
        <form action="">
          <input name="" id="" cols="30" rows="10" className='txtEncript'></input>
          <div className="buttons">
            <button className="btnEncript" onClick={onClickButton}><h1>Encriptar</h1></button>
            <button className="btnDesencript"><h1>Desencriptar</h1></button>
          </div>
        </form>
        <div className="desencriptador">
          <img src={magnifying} className='imgNot' alt="logo" />
          {/* <img src={magnifying} className={`${(onClickButton===1) ? 'imgNot' : 'imgNot2'}`} alt="logo" /> */}
          <div className='txtNotDeco'>
              <h1> Ningún mensaje fue encontrado.</h1>
              <h2>Ingresa el texto que desees encriptar o desencriptar.</h2>
          </div>
        </div>

      </header>
      </div>
    </div>
  );
}



export default App;

