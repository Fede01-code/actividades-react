import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import Select from "@/shared/components/Select";
// import "../services/selectService";
import { useEffect, useState } from "react";
import { getDocumentTypes } from "../services/selectService";

export default function UserForm(){

    const [documentTypes, setDocumentTypes] = useState([])
    useEffect (() =>{
        getDocumentTypes().then(setDocumentTypes)
    }, []);
    // const hundleNameChange = (e) => {
    //     console.log("Nombre del usuario: ", e.target.value)
    // };
    
    const hundleEmailBlur = (e) => {
        console.log("email del usuario: ", e.target.value)
    };
    const hundleSubmit = (e) => {
        console.log("formulario enviado: ", e.target.value)
    };
    
    // una validación básica
    const hundleNameChange = (e) => {
        console.log("Nombre del usuario: ", e.target.value)
        if (e.target.value === ""){
            console.log(`este campo no puede estar vacio`)
        }
    };

    return(
        <div>
            {/* Formulario para crear el usuario */}
            <form className="
            px-6 py-12 
            grid grid-cols-1 gap-6
            bg-white/50 
            dark:bg-neutral-800/20
            backdrop-blur-sm
            shadow-xl
            ring-1
            rounded-xl
            "
            >
                <Input
                    label="nombre"
                    placeholder="Ingrese su nombre"
                    onChange={hundleNameChange}
                >
                </Input>
                <Input
                    label="email"
                    placeholder="Ingrese su email"
                    onBlur={hundleEmailBlur}
                >
                </Input>
                <Select
                    label="tipo de documento"
                    name = "documentTypes"
                    opcions = {documentTypes}
                >
                </Select>

                {/* Actions */}
                <div className= "flex items-center justify-center gap-12">
                    <Button
                        variant = "secondary"
                        size = "sm"
                        onClick = {() => console.log("Oprimió cancelar")}
                    >
                        Cancelar
                    </Button>

                    <Button
                        type="submit"
                        variant = "primary"
                        size = "md"
                        onSubmit={hundleSubmit}
                    >
                        Guardar
                    </Button>
                </div>
            </form>
        </div>
    )
}