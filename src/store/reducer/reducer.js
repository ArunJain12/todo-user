import * as actionTypes from "../actions/actionTypes";

const initialState = {
  link: "todos",
  show: false,
  confirmLoading: false,
  users: [],
  todos: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LINK:
      return {
        ...state,
        link: action.link
      };

    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        show: action.visible
      };

    case actionTypes.START_OPERATION:
      return {
        ...state,
        confirmLoading: true
      };

    case actionTypes.END_TODO_OPERATION:
      return {
        ...state,
        confirmLoading: false,
        show: false,
        todos: [...action.todos]
      };

    case actionTypes.END_USER_OPERATION:
      return {
        ...state,
        confirmLoading: false,
        show: false,
        users: [...action.users]
      };

    case actionTypes.LOAD_USERS:
      return {
        ...state,
        users: [...action.users]
      };

    case actionTypes.LOAD_TODOS:
      return {
        ...state,
        todos: [...action.todos]
      };

    default:
      return state;
  }
};

export default reducer;
