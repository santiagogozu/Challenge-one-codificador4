import magnifying from '../assets/magnifying.png';

function Result(props) {

    var copyText;
    const copyResult = async () => {
      copyText = props.newPropsText;
      try {
        await navigator.clipboard.writeText(copyText);
      } catch {
        console.error("Failed to copy");
      }
    };


    return (
        <div className='box-result'>
            <div className="desencriptador" style={{display: props.isShown  ? '' : 'none' }}>
                <img src={magnifying} className='imgNot' alt="logo" />
                <div className='txtNotDeco'>
                    <h1> Ningún mensaje fue encontrado.</h1>
                    <h2>Ingresa el texto que desees encriptar o desencriptar.</h2>
                </div>
            </div>

            <div  className="result" style={{display: props.isShown  ? 'none' : '' }}>
                <h1>{props.newPropsText}</h1>
                <button className="btnCop" onClick={copyResult}><h1>Copiar</h1></button>
            </div>
        </div>

    )
}


export default Result;


