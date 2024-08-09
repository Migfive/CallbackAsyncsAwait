import fetch from 'node-fetch'
const API = 'https:/api.escuelajs.co/api/v1'

function fetchData (url,data) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
const data = {
  "title": "Miguel Clothes",
  "price": 212,
  "description": "A shirt",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

fetchData(`${API}/products`, data)
    .then(response => response.json())
    .then(products => console.log(products))
    .catch(error => console.log(error))


