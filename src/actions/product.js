import api from '../utils/api';

// Load User
export const getProducts = () => async dispatch => {
  try {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlMb2dpbklkIjoiNDcwNDBmMWQtODkwOC00ZTc5LWJhYjAtYTM3YzcyMmJjMjRlIiwibmJmIjoxNjU2NDU0MTY3LCJleHAiOjE2NTY0NTc3NjcsImlhdCI6MTY1NjQ1NDE2NywiaXNzIjoiaWlrbyIsImF1ZCI6ImNsaWVudHMifQ.HeZu831QcQHv2ssmWlCo2wuo8gh5y7qX8MGgod7TGy0',
    }
    const data = {
        organizationId: '28fc9d3d-ff05-4a46-ae20-0d864d10bb2d'
    }
    const res = await api.post('/api/1/nomenclature',data, {
        headers: headers
    });

    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: 'AUTH_ERROR'
    // });
  }
};
