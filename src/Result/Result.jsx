import magnifying from '../assets/magnifying.png';

function Result(props) {
    return (
        <div>
            <div className="desencriptador" style={{display: props.isShown  ? '' : 'none' }}>
                <img src={magnifying} className='imgNot' alt="logo" />
                <div className='txtNotDeco'>
                    <h1> Ningún mensaje fue encontrado.</h1>
                    <h2>Ingresa el texto que desees encriptar o desencriptar.</h2>
                </div>
            </div>
            <div  className="result" style={{display: props.isShown  ? 'none' : '' }}>
            <h1>{props.newTodoValue}</h1>
            </div>
        </div>

    )
}


export default Result;