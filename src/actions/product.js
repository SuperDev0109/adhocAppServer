import api from '../utils/api';
import setAuthToken from '../utils/setAuthToken';

// import https from 'https';

export const getAuthToken = () => async dispatch => {
    const res = await api.post('/1/access_token', {"apiLogin": "b23027da-b22"});
    // setAuthToken(res.data.token);
}

// Load User
export const getProducts = (param) => async dispatch => {
    try {
        const data = {
            organizationId: process.env.REACT_APP_ORGANIZATION_ID
        }
        const res = await api.post('/1/nomenclature', data);

        dispatch({
            type: 'GET_PRODUCTS',
            payload: res.data
        });

        return "success";
    } catch (err) {
        if (err.response.status === 401) {
            return "fail";
        }
    }
};
