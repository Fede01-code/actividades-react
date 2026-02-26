/**
 * useEffect
 * 
 * useEffect es un hook que permite ejecutar efectos secundarios en componentes funcionales
 * Un efecto secundario es cualquier operación que:
 * 1. ocurre fuera del render
 * 2. interactua con el mundo exterior al componente
 *  ejemplos_
 *  -Llamadas APIs
 *  -Manipulación del DOM
 *  -Actulizar un título del navegador
 * 
 * ===============SINTAXIS==============
 * 
 *      useEffect (() => {
 *          efecto         -Código que se ejecuta
 *      }), [];            -en los [] se coloca el arreglo de una o muchas dependencias
 * 
 */

// =========EFECTO CON EL ARRAY VACÍO======
// import { useEffect, useState } from "react";

// function DeleteUseEffect (){

//     const [message, setMessage] = useState("cargando..."); 

//     useEffect (() => {
//         setTimeout (() => {
//             setMessage("se acaba de ejecutar el efecto")
//         }, 3000);
//     }), [];
    
//     return (
//         <h1>{message}</h1>
//     );
// };

// export default DeleteUseEffect;

// ==========================================================
/** 
 * Hook useEffect con una dependencia
 * 
 * entender que useEffect se vuelve a ejecutar cuando cambia una dependencia
 * -useEffect puede ejecutarse otra vez si algo cambia
 * -ese algo se declara en el array de dependencias
 */

import { useEffect, useState } from "react";

function DeleteUseEffect(){
    const [count, setCount] = useState (0);
    const [message, setMessage] = useState("El contador no ha cambiado"); 

    useEffect (() => {
        setMessage(`El contador cambió a ${count}`)
    }, [count]);

    return (
        <>
            <h2>{count}</h2>
            <p>{message}</p>

            <button className= "border border-border p-2" onClick = {() => setCount(count+1)}>
                incrementar
            </button>
        </>
    )
}

export default DeleteUseEffect;

/**
 * IMPORTANTE
 * -Si una dependencia cambia el efecto se ejecuta
 * -Si no cmabia el efecto no se ejecuta
 * 
 */