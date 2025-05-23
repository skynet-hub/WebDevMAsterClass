//Let us do memoize..Should be fun Yeeeey!!!


function memoize(fn){
    const cache = {}
    return (...args) => {
        const key = JSON.stringify(args)
        if (cache[key]){
            return key;
        } else {
            let result = fn(...args)
            cache[key] = result
            return result
        }
    }
}

function add(a, b){
    console.log("Calculating...");
    return a + b;   
}

const memoizedAdd = memoize(add)

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
