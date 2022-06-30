import api from '../utils/api';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// import https from 'https';

export const getAuthToken = () => async dispatch => {

    var data = JSON.stringify({
        "apiLogin": "b23027da-b22"
    });

    var config = {
        method: 'post',
        url: '/api/1/access_token',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    // var data = JSON.stringify({
    //     "apiLogin": "b23027da-b22"
    //   });
    // const res = await api.post('/1/access_token', data);
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
