import { useState, useEffect } from "react";

const Game = () => {
    const [objetos, setObjetos] = useState([]);
    const [objetoSeleccionado, setObjetoSeleccionado] = useState({});
    const [respuestaUsuario, setRespuestaUsuario] = useState('');
    const [resultado, setResultado] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                setObjetos(data);
            });
    }, []);

    useEffect(() => {
        seleccionarObjetoAleatorio();
    }, [objetos]);

    const seleccionarObjetoAleatorio = () => {
        if (objetos.length) {
            const indiceAleatorio = Math.floor(Math.random() * objetos.length);
            setObjetoSeleccionado(objetos[indiceAleatorio]);
        }
    };

    const manejarRespuesta = () => {
        if (respuestaUsuario.toLowerCase() === objetoSeleccionado.name.common.toLowerCase()) {
            setResultado(<h2 className="text-3xl text-green-600">Bien perrito</h2>);
            setTimeout(() => {
                setRespuestaUsuario("");
                seleccionarObjetoAleatorio();
                setResultado("")
            }, 2000)
        } else {
            setResultado(<h2 className="text-3xl text-red-600">Mal perreke, intenta de nuevo</h2>);
            setTimeout(()=>{
                setRespuestaUsuario("")
                setResultado("")
            }, 2000)
        }
    };

    return (
        <div className="bg-red-100 flex flex-col items-center mt-4">
            <h1 className="card-title">What's the name of this flag?</h1>
            <img className="card-image" src={objetoSeleccionado.flags && objetoSeleccionado.flags.png}></img>
            <input className="input mt-4"
                type="text"
                value={respuestaUsuario}
                onChange={(e) => setRespuestaUsuario(e.target.value)}
            />
            <button className="btn" onClick={manejarRespuesta}>Adivinar</button>
            <button className="btn" onClick={seleccionarObjetoAleatorio}>X</button>
            <div>{resultado}</div>
        </div>
    );
};

export default Game;


// AGREGAR CONTADOR QUE DIGA CUANTOS ACIERTOS SEGUIDOS VAS.
// AGREGAR BOTON PARA CAMBIAR BANDERA
// SI NO ESCRIBO NADA SALE ERROR (QUE HACER?)
// COMO EVITAR PONER ACENTO Y QUE SEA CORRECTO