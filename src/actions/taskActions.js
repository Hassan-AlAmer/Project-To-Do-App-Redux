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
  export const updateTask = (index, title) => {
    return {
      type: "UPDATE_TASK",
      payload: { index, title }
    };
  };
  export const compliteTask = (checked, index) => {
    return {
      type: "COMPLITE_TASK",
      payload: { checked, index }
    };
  };
  
