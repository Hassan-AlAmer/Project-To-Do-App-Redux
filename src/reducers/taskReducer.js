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
        let index=action.payload.index;
        let title=action.payload.title;

        let currentTasks = tasks[index];
        currentTasks["taskTitle"]=title;

        let newTasks = [...tasks];
        newTasks.splice(index, 1, currentTasks);        
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
