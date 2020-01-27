import * as actionTypes from "./actionTypes";

export const setLink = link => {
  return {
    type: actionTypes.SET_LINK,
    link
  };
};

export const toggleModal = visible => {
  return {
    type: actionTypes.SHOW_MODAL,
    visible
  };
};

export const loadUser = users => {
  return {
    type: actionTypes.LOAD_USERS,
    users
  };
};

export const laodUsersFromLocalStorage = () => {
  return dispatch => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    if (!users.length) {
      localStorage.setItem("users", JSON.stringify(users));
    }
    dispatch(loadUser(users));
  };
};

export const loadTodos = todos => {
  console.log(todos);
  return {
    type: actionTypes.LOAD_TODOS,
    todos
  };
};

export const laodTodosFromLocalStorage = () => {
  return dispatch => {
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (!todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    dispatch(loadTodos(todos));
  };
};

export const startOperation = () => {
  return {
    type: actionTypes.START_OPERATION
  };
};

export const endUserOperation = users => {
  return {
    type: actionTypes.END_USER_OPERATION,
    users
  };
};

export const endTodoOperation = todos => {
  return {
    type: actionTypes.END_TODO_OPERATION,
    todos
  };
};

export const addUser = (key, name, email) => {
  return dispatch => {
    dispatch(startOperation());
    setTimeout(() => {
      let users = JSON.parse(localStorage.getItem("users"));
      let data = { key, name, email };
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      dispatch(endUserOperation(users));
    }, 2000);
  };
};

export const addTodo = (key, todo, date) => {
  return dispatch => {
    dispatch(startOperation());
    setTimeout(() => {
      let todos = JSON.parse(localStorage.getItem("todos") || "[]");
      let data = { key, todo, date };
      todos.push(data);
      localStorage.setItem("todos", JSON.stringify(todos));
      dispatch(endTodoOperation(todos));
    }, 2000);
  };
};

export const deleteUser = key => {
  return dispatch => {
    // console.log(key);
    let users = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < users.length; i++) {
      if (key === users[i].key) {
        users.splice(i, 1);
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
    dispatch(endUserOperation(users));
  };
};

export const deleteTodo = key => {
  return dispatch => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    for (var i = 0; i < todos.length; i++) {
      if (key === todos[i].key) {
        todos.splice(i, 1);
      }
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    dispatch(endTodoOperation(todos));
  };
};
