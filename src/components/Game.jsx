import { useState, useEffect } from "react";

const Game = () => {
    const [object, setObjects] = useState([]);
    const [objectSelected, setObjectSelected] = useState({});
    const [userResponse, setUserResponse] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                setObjects(data);
            });
    }, []);

    useEffect(() => {
        randomObject();
    }, [object]);

    const randomObject = () => {
        if (object.length) {
            const randomIndex = Math.floor(Math.random() * object.length);
            setObjectSelected(object[randomIndex]);
        }
    };

    const handleResponse = () => {
        if (userResponse.toLowerCase() === objectSelected.name.common.toLowerCase()) {
            setResult(<h2 className="text-3xl text-green-600">Bien perrito</h2>);
            setTimeout(() => {
                setUserResponse("");
                randomObject();
                setResult("")
            }, 2000)
        } else {
            setResult(<h2 className="text-3xl text-red-600">Mal perreke, intenta de nuevo</h2>);
            setTimeout(()=>{
                setUserResponse("")
                setResult("")
            }, 2000)
        }
    };

    return (
        <div className="bg-red-100 flex flex-col items-center mt-4">
            <h1 className="card-title">What's the name of this flag?</h1>
            <img className="card-image" src={objectSelected.flags && objectSelected.flags.png}></img>
            <input className="input mt-4"
                type="text"
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
            />
            <button className="btn" onClick={handleResponse}>Adivinar</button>
            <button className="btn" onClick={randomObject}>X</button>
            <div>{result}</div>
        </div>
    );
};

export default Game;


// AGREGAR CONTADOR QUE DIGA CUANTOS ACIERTOS SEGUIDOS VAS.
// AGREGAR BOTON PARA CAMBIAR BANDERA
// SI NO ESCRIBO NADA SALE ERROR (QUE HACER?)
// COMO EVITAR PONER ACENTO Y QUE SEA CORRECTO