// In the case to Remove 'DELETE'
import fetch from 'node-fetch';
import * as url from "node:url";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData_D(url){
    return fetch(url, {
        method: 'DELETE',
        mode:'cors',
        credentials: 'same-origin',
        headers:{
            'content-type': 'application/json'
        }
    })
}
fetchData_D(`${API}/products/73`).then(response => {
    if (response.ok) {
        console.log('Resource deleted successfully.');
    }else {
        return response.json().then(error =>{
            throw new Error(`Error: ${error.message}`);
        })
    }
})
    .catch(e => console.error(e));