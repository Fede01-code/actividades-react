import { Input, Button, Select } from "@/shared/components";
import { AvatarUploader } from "@/shared/components";
import { useEffect, useState } from "react";
import { getDocumentTypes } from "../services/selectService";
import { userSchema } from "../schemas/userSchema";


export default function UserForm(){
    const [formData, setFormData] = useState({
        name: "",
        userEmail: "",
        phone: "",
        documentTypes: "",
        documentNumber: "",
        password: "",
        avatarUrl: null,

    });
    // Función que se ejecuta cada vez que cambia el valor de un input del formulario 
    const handleChange = (e) => { 
        // Se obtiene el nombre del campo (name) y su valor actual (value) 
        // desde el elemento que disparó el evento 
        const { name, value } = e.target; 
        // Se actualiza el estado del formulario 
        // prev representa el estado anterior del formulario 
        setFormData((prev) => ({ 
            // Se copian todos los valores anteriores del estado 
            ...prev, 
            // Se actualiza únicamente el campo que cambió 
            // [name] permite usar el nombre del input como clave dinámica 
            [name]: value, 
        }));
    };
 
    //============== HANDLE SUBMIT ============== 
    // Función que se ejecuta cuando se envía el formulario 
    const handleSubmit = (e) => { 
        // Evita que el formulario recargue la página 
        e.preventDefault(); 
        // Se valida el objeto formData usando el esquema definido con Zod 
        // safeParse devuelve un objeto indicando si la validación fue exitosa o no 
        const result = userSchema.safeParse(formData); 
        // Si la validación falla 
        if (!result.success) { 
            // Objeto donde se almacenarán los errores por campo 
            const fieldErrors = {}; 
            // Zod devuelve los errores en un arreglo llamado issues 
            // Se recorren para asociar cada error a su campo correspondiente 
            result.error.issues.forEach((issue) => { 
                // issue.path contiene la ruta del campo que falló 
                const field = issue.path[0]; 
                // Se guarda el mensaje de error en el objeto fieldErrors 
                fieldErrors[field] = issue.message; 
            }); 
            // Se actualiza el estado de errores para mostrarlos en el formulario 
            setErrors(fieldErrors); 
            // Se detiene la ejecución porque el formulario tiene errores 
            return; 
        }
        // Si la validación es exitosa se limpian los errores anteriores 
        setErrors({}); 
        // result.data contiene los datos ya validados por Zod 
        console.log("Usuario válido:", result.data); 
    };

    //Estados de los errores
    const [error, setErrors] = useState({})

    //Estados de los tipos de docuemntos
    const [documentTypes, setDocumentTypes] = useState([])
    useEffect (() =>{
        getDocumentTypes().then(setDocumentTypes)
    }, []);
    
    return (
      <div>
        {/* Formulario para crear el usuario */}
        <form
          onSubmit={handleSubmit}
          className="
            px-6 py-12 
            grid grid-cols-2 gap-6
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
            name="name"
            placeholder="Ingrese su nombre"
            value={formData.name}
            onChange={handleChange}
            error={error.name}
          ></Input>
          <Input
            label="email"
            name="userEmail"
            placeholder="Ingrese su email"
            value={formData.userEmail}
            onChange={handleChange}
            error={error.userEmail}
          ></Input>
          <Input
            type="tel"
            label="Telefono"
            name="phone"
            placeholder="Ingrese su telefono"
            value={formData.phone}
            onChange={handleChange}
            error={error.phone}
          ></Input>
          <Select
            label="tipo de documento"
            name="documentTypes"
            opcions={documentTypes}
            value={formData.documentTypes}
            onChange={handleChange}
            error={error.documentTypes}
          ></Select>
          <Input
            label="Número de documento"
            name="documentNumber"
            placeholder="Ingrese su número de documento"
            value={formData.documentNumber}
            onChange={handleChange}
            error={error.documentNumber}
          ></Input>
          <Input
            type="password"
            label="Contraseña"
            name="password"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
            error={error.password}
          ></Input>

          <AvatarUploader
            onUpload={(url) =>
              setFormData((prev) => ({
                ...prev,
                avatarUrl: url,
              }))
            }
          />

          {/* Actions */}
          <div className="flex items-center justify-center gap-12">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => console.log("Oprimió cancelar")}
            >
              Cancelar
            </Button>

            <Button type="submit" variant="primary" size="md">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    );
}