//Looking closely at closures and some of its uses

//Let us look @ this need feature that prevents triggering of a function more than once within a given time limit

function timeLimiter(fn, limit){
    let lastCall = 0;
    return (...args) =>{
        //let us check the time now
        const now = Date.now();  //Now is a method
        if (now - lastCall < limit){
            console.log("Rate limit exceeded.")
        } else {
            lastCall = now
            return fn(...args)
        }
    } 
}

//Let us create the function to call
function sayHello(){
    console.log("hello")
}

//Let us make the call limit to 1 per 2 seconds
const limitedSayHello = timeLimiter(sayHello, 2000); // Only allow every 2 seconds

limitedSayHello();
limitedSayHello();
setTimeout(() => {
    limitedSayHello();
}, 2000)
limitedSayHello(); //This must yield limited rat