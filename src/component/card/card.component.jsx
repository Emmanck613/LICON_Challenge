
const Card = ( { list, onToggleCompleted }) => {
    const { id, title, completed } = list; //{list} replaces this.prop.list
 // Define a base class for the card
    const baseClass = "mt-5 flex items-center justify-between p-2";

 // Add a class based on the completed state for background color
    const cardClass = completed ? `${baseClass} bg-purple-700` : `${baseClass} bg-rose-700`;

    return (
        <div className={cardClass} key={id} >
            <div className="flex items-center justify-center gap-2 ">
                <input
                    id={`todo-${id}`}
                    name={`todo-${id}`}
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    checked={completed}
                    onChange={() => onToggleCompleted(id)}
                />
                <p className="text-base text-navy-700 text-gray-800 ">
                    {id}. {title}
                </p>
            </div>
        </div>
    );
};

export default Card; //allows other files to import code written in this file by default Card