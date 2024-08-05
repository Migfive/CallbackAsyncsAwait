/*
Configuration:
link: https://developer.mozilla.org/es/docs/Web/JavaScript
link: https://fakeapi.platzi.com/
*/
function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2,2, sum));

setTimeout(function (){
    console.log("Hola javascript");
},2000)

function gretting(name){
    console.log(`Greeting ${name}`);
}
setTimeout(gretting,2000, 'Miguel ')

function sleep(ms=2000){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleeping(time){
    await sleep(time);
    for (let i = 1; i <= 3; i++){
        console.log(`I am sleeping ${i}`);
    }
}

sleeping(3000).catch(console.error);