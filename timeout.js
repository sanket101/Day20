//setTimeout
let timeOut = (seconds, message, m2) => {
    setTimeout((msg,m2) => {
        console.log(`${msg} ${m2} after ${seconds} seconds`);
    },seconds*1000,message, m2);
}

timeOut(3,"Hello", "Everyone!");

//setInterval
let handle;
let timeOutInterval = (seconds = 2000, message = "Default Message!") => {
    handle = setInterval((msg) => {
        console.log(`${msg} executed after ${seconds} seconds`);   
    },seconds*1000, message);
}

timeOutInterval(1, "Called after Every Second");
console.log(`This is printed before timeout..`);

setTimeout(() => {
    console.log(`Lets terminate the interval...`);
    clearInterval(handle);
},5000);