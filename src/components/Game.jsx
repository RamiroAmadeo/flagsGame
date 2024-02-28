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

    // Define la función seleccionarObjetoAleatorio dentro de useEffect
    useEffect(() => {
        const seleccionarObjetoAleatorio = () => {
            const indiceAleatorio = Math.floor(Math.random() * objetos.length);
            setObjetoSeleccionado(objetos[indiceAleatorio]);
        };

        if (objetos.length > 0) {
            seleccionarObjetoAleatorio();
        }
    }, [objetos]); // Ejecuta cuando objetos cambia
    console.log(objetoSeleccionado)

    // Función para manejar la respuesta del usuario
    const manejarRespuesta = () => {
        if (respuestaUsuario.toLowerCase() === objetoSeleccionado.name.common.toLowerCase()) {
            setResultado('¡Correcto! Has adivinado el objeto.');
        } else {
            setResultado('Incorrecto. Sigue intentando.');
        }
        setRespuestaUsuario('');
        seleccionarObjetoAleatorio(); // Selecciona un nuevo objeto aleatorio
    };

    return (
        <div>
            <h1>Juego para adivinar el nombre del objeto</h1>
            <p>Adivina el nombre del siguiente objeto:</p>
            <p>{objetoSeleccionado.descripcion}</p>
            <input
                type="text"
                value={respuestaUsuario}
                onChange={(e) => setRespuestaUsuario(e.target.value)}
            />
            <button onClick={manejarRespuesta}>Adivinar</button>
            <p>{resultado}</p>
        </div>
    );
};

export default Game;