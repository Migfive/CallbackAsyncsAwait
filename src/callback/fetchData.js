const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1'

function fetchData (url, callBack){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function (event) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                return callBack(null, JSON.parse(xhr.responseText))
            }
        }else {
            const error = new Error('Error' + url)
            return callBack(error, url)
        }
    }
    xhr.send()
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});