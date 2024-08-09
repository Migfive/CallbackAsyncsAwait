const fnAsync= () =>{
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Async'), 2000)
            : reject(new Error('Async failed with async'));
    });
}

const anotherFunction = async () =>{
    const someTime = await fnAsync();
    console.log(someTime);
    console.log('Hello')
}

console.log('Before')
anotherFunction()
console.log('After')