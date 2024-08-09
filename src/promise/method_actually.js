import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

function fetchData_A(url,data){
    return fetch(url, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
const updatedData = {
  "title": "Miguel_Clothes",
  "price": 2123,
  "description": "A shirt",
  "categoryId": 2,
  "images": ["https://placeimg.com/640/480/any"]
};

fetchData_A(`${API}/products/86`, updatedData)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(e => console.log(e));
