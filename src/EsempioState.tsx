import {useState} from 'react';

export default function EsempioState(){
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(1)}>Aumenta</button>
        </div>
    );

}

