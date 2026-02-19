// hook useState

import { useState } from "react";

export default function DeleteCounter (){
    // count es el valor actual del estado
    // setCount es la función para actualizar 
    // useState() es el valor inicial
    
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Counter:{count}</p>
            <button onClick={() => setCount(count+1)}>Incrementar</button>
        </div>
    )
}