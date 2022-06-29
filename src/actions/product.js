import api from '../utils/api';
import setAuthToken from '../utils/setAuthToken';

export const getAuthToken = () => async dispatch => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "apiLogin": "b23027da-b22"
    });

    var requestOptions = {
        mode: 'no-cors',
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api-eu.iiko.services/api/1/access_token", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


    // const res = await api.post('/1/access_token', {"apiLogin": "b23027da-b22"});
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
