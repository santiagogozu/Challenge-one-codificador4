import magnifying from './magnifying.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="">
          <input name="" id="" cols="30" rows="10" className='txtEncript'></input>
          <div class="buttons">
            <input type="submit" value="Encriptar" class="btnEncript"></input>
            <input type="submit" value="Desencriptar" class="btnDesencript"></input>
          </div>
        </form>
        <div className="desencriptador">
          <img src={magnifying} className="imgNot" alt="logo" />
          <div className='txtNotDeco'>
              <h1> Ningún mensaje fue encontrado.</h1>
              <h2>Ingresa el texto que desees encriptar o desencriptar.</h2>
          </div>
        </div>

      </header>
    </div>
  );
}



export default App;

