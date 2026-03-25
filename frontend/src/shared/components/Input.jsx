//Creación de componente input

export default function Input({
    label, 
    type = "text",
    error, 
    ...props
    }){
    return (
    <div className="w-[320px]">
        {/* label */}
        {label && (
            <label
                className={`
                    block 
                    text-[8px] 
                    px-4
                    mb-1
                    ${error ? "text-red-600" : ""}
                `}
            >
                {label}
            </label>
        )}


        {/* Contenedor del input */}

        <div
            className="
                relative
                h-12
                flex
                items-center
            "
        >
    
        {/* área interactiva visible(48 px)*/}
        <div
            className="
                absolute
                inset-0
            "    
                onMouseDown = {(e) => {
                    e.preventDefault();
                    e.currentTarget.nextSibling.focus();
                }}
            
        />
            {/* input visual */}
            <input 
                type={type}
                className={`
                    relative
                    w-full
                    h-12
                    rounded-md
                    border
                    border-gray-300
                    px-4
                    text-base
                    focus:ring-2
                    focus:outline-none
                    focus:ring-blue-500
                    focus:border-blue-500
                    ${error ? "border-red-600" : "broder-gray-300"}
                `}
                {...props}
            />
        </div>

        <div>
            {error && <p className="text-[8px] text-red-600 mt-1">{error}</p>}
        </div>
        
    </div>

        
    );
}