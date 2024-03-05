import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const Game = () => {
    const [object, setObjects] = useState([]);
    const [objectSelected, setObjectSelected] = useState({});
    const [userResponse, setUserResponse] = useState('');
    const [result, setResult] = useState('');
    const [count, setCount] = useState(0);

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
            setCount(0);
        }
    };

    const handleResponse = () => {
        if (userResponse.toLowerCase() === objectSelected.name.common.toLowerCase()) {
            setResult(<h2 className="text-3xl font-semibold text-green-600">! Correct ¡</h2>);
            setTimeout(() => {
                setUserResponse("");
                randomObject();
                setResult("")
                setCount(count + 1)
            }, 2000)
        } else {
            setResult(<h2 className="text-3xl font-semibold text-red-600">! Incorrect ¡ Try again </h2>);
            setTimeout(()=>{
                setUserResponse("")
                setResult("")
                setCount(0)
            }, 2000)
        }
    };

    return (
        <div>
            <NavBar/>
            <div className="h-screen bg-[#230C22] flex flex-col items-center justify-center py-10">
                <h1 className="card-title">What's the name of this flag?</h1>
                <p className="text-[#f1f1f1] mt-5">Winning Streak: {count}</p>
                <img className="card-image" src={objectSelected.flags && objectSelected.flags.png}></img>
                <input className="input-game"
                    type="text"
                    value={userResponse}
                    onChange={(e) => setUserResponse(e.target.value)}
                />
                <button className="btn" onClick={handleResponse}>Guess</button>
                <button className="btn" onClick={randomObject}>Another flag</button>
                <div>{result}</div>
            </div>
        </div>
    );
};

export default Game;


// COMO EVITAR PONER ACENTO Y QUE SEA CORRECTO