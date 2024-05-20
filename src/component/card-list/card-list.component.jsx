import Card from '../card/card.component';

const CardList = ({ toDoList, onToggleCompleted  } ) => (
    
    //because the first parameter(argument) will always be first, 
    //we can destructor inside the parameter
    <div className='flex flex-col justify-center items-center bg-slate-900'>
            <ul className="px-4">
                {toDoList.map((list) => {
                    return <Card  list={list} onToggleCompleted={onToggleCompleted} />; //toDo is a prop(property
                    }   
                )}
            </ul>
    </div>

);

export default CardList; //allows other files to import code written in this file by default CardList