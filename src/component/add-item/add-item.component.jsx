import React from 'react';

const AddItem = ({onSubmit, value, onChange}) => {
    return (
    <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={onSubmit}>
        <div className="flex items-center border-b-2 border-purple-500 py-2">
            <input
                className="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" 
                placeholder="Agregar Tarea"
                value={value} // Controlled input value
                onChange={onChange} // Handle input changes
            />
            <button
                className="text-purple-700 hover:text-white border-2 border-purple-700 hover:bg-purple-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:purple-teal-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-600 "
                type="submit">
                +
            </button>
        </div>
    </form>
    )
};

export default AddItem;