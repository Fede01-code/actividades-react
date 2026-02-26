export default function Select ({
    label,
    name,
    opcions = []
    }
){

    return (
        <div className="w-[320px]">
            
            {/* Sí el label tiene contenido es igual a truthy, si no es igual a falsy y no muestra el label*/}
            {label && (
                <label className="text-caption mb-1 text-text-mute">
                    {label}
                </label>
            )}

            <select 
            name={name} 
            className="
                w-full
                h-12
                rounded-md
                border
                border-border
                px-4
            "
            >
                <option value="">Seleccione un tipo de documento</option>
                {opcions.map((option) => {
                    return(
                    <option key = {option.id} value = {option.id}> 
                        {option.label}
                    </option>
                    )
                })
                }
            </select>

        </div>
    );
};