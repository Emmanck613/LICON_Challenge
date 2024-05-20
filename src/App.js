import { useEffect } from 'react';

import CardList from './component/card-list/card-list.component';
import AddItem from './component/add-item/add-item.component';
import StarryNight from './component/background/background.component';

import useToDoStore from './zustand/list-store'; // Import the store


import './App.css';

const App = () => {
  const { toDoList, newItem, fetchTodos, handleToggleCompleted, handleAddItem, setNewItem, errorMessage  } = useToDoStore();

  useEffect(() => {
    fetchTodos();
  }, []);
  

  return (
    <div>
      <StarryNight/>
      <div className='max-w-md mx-auto shadow-lg rounded-[20px] overflow-hidden mt-16 my-5 bg-slate-900 z-10' style={{ position: 'relative' }}>
        <div className="px-4 py-2">
            <h1 className="text-slate-500 font-bold text-2xl uppercase flex items-center justify-center">To-Do List</h1>
        </div>
        {errorMessage && <div className="error-message text-red-700 flex items-center justify-center ">{errorMessage}</div>}
        <AddItem 
          onSubmit={(e) => { 
            e.preventDefault(); 
            handleAddItem(newItem); 
          }} 
          value={newItem} 
          onChange={(e) => setNewItem (e.target.value) } />
          
        <CardList toDoList={toDoList} onToggleCompleted={handleToggleCompleted}/>
      </div> 
    </div>
  );
}

export default App;
