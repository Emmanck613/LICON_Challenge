import {create} from 'zustand';

const useTodoStore = create((set,get) => ({
  toDoList: [],
  newItem: '', // Valor para nuevo item
  errorMessage: '', // mensaje


  // Fetch data
  fetchTodos: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
      set({ toDoList: todos });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  },

  // Actions for updating state
  handleAddItem: (title) => {
    if (title.trim() === '') {
      set({ errorMessage: 'Ingresa un titulo valido' });
      setTimeout(() => set({ errorMessage: '' }), 2000);
      return;
    }

    const newId = Math.max(...get().toDoList.map((todo) => todo.id)) + 1;
    const newTodoItem = { id: newId, title, completed: false };
    set({ toDoList: [...get().toDoList, newTodoItem], newItem: '' });

  },

  handleToggleCompleted: (id) =>
    set((state) => ({
      toDoList: state.toDoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  setNewItem: (value) => set({ newItem: value }),
}));

export default useTodoStore;
