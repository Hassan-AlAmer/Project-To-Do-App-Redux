export const addTask = task => {
    return {
      type: "ADD_TASK",
      payload: { task }
    };
  };
  
  export const removeTask = task => {
    return {
      type: "REMOVE_TASK",
      payload: { task }
    };
  };
  export const updateTask = task => {
    return {
      type: "UPDATE_TASK",
      payload: { task }
    };
  };
  
