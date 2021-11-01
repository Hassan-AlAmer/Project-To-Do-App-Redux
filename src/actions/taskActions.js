export const addTask = task => {
    return {
      type: "ADD_TASK",
      payload: { task }
    };
  };
  
  export const removeTask = index => {
    return {
      type: "REMOVE_TASK",
      payload: { index }
    };
  };
  export const updateTask = task => {
    return {
      type: "UPDATE_TASK",
      payload: { task }
    };
  };
  export const compliteTask = (checked, index) => {
    return {
      type: "COMPLITE_TASK",
      payload: { checked, index }
    };
  };
  
