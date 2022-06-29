  
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
};
  
  function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'ACCESS_TOKEN':
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
      default:
        return state;
    }
  }
  
  export default authReducer;
  