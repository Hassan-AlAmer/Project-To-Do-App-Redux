const tasksReducer = (tasks = [], action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...tasks, action.payload.task];
        
      case "REMOVE_TASK":{
        let newTasks = [...tasks];
        newTasks.splice(action.payload.index, 1);
        return newTasks;
      }
      case "UPDATE_TASK":{
        let newTasks = tasks.filter((task) => task.id != action.payload.task.id);
        newTasks=[...newTasks, action.payload.task]
        return newTasks;
      }
      case "COMPLITE_TASK":{
        let index=action.payload.index;
        let checked=action.payload.checked;

        let currentTasks = tasks[index];
        currentTasks["isComplite"]=checked;

        let newTasks = [...tasks];
        newTasks.splice(index, 1, currentTasks);
        return newTasks;
      }
      default:
        return tasks;
    }
  };
  
  export default tasksReducer;
