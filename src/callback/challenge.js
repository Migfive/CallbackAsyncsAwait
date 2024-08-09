/*
const XmlHttpRequest = require ('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1'

function fetchData (url, callBack) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            return callBack(null, JSON.parse(xhr.responseText));
        }else {
            const error = new Error('Error'+ url)
            return callBack(error, null)
        }
    }
    xhr.send()
}*/