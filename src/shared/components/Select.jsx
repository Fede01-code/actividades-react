export default function Select ({
    label,
    name,
    value,
    error,
    onChange,
    opcions = []
    }
){

    return (
        <div className="w-[320px] grid items-center">
            
            {/* Sí el label tiene contenido es igual a truthy, si no es igual a falsy y no muestra el label*/}
            {label && (
                <label className={`
                    text-[8px] 
                    px-4 
                    mb-1
                    ${error ? "text-red-600" : ""}
                    `}
                    >
                    {label}
                </label>
            )}

            <select 
            value={value}
            onChange={onChange}
            name={name} 
            className={`
                w-full
                h-12
                rounded-md
                border
                border-gray-300
                px-4
                ${error ? "border-red-600" : "broder-gray-300"}
            `}
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
                {error && <p className="text-[8px] text-red-600 mt-1">{error}</p>}
        </div>
    );
};