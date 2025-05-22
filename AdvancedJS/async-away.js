function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Magobo", url: "https://www.MagoboLesaomako.org"});
        }, 3000)
    });
};

async function getData() {
    console.log("Fetching data....")
    const data = await fetchData();
    console.log("Data fetched successfully...");
    console.log(`Name: ${data["name"]}, url: ${data["url"]}`);    
}

getData();