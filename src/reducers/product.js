  
const initialState = {
    products: null,
};
  
  function productReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_PRODUCTS':
        return {
            products: payload
        };
        default:
            return state;
    }
  }
  
  export default productReducer;
  