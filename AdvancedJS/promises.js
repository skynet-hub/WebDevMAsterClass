function fetchData(){
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success){
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data!");
            }
        }, 3000);
    });
};

fetchData()
    .then((data) => {
        console.log(data)
        return `Magobo`;
    })
    .then((value) => {
        console.log(value.toLowerCase())
    })
    .catch((error) => {
        console.log(error)
        return error
    })