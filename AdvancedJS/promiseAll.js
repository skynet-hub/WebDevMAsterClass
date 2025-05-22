//Let us have a closer look at promise all
//We will make two promises as such

//Here's first promise
function fetchPostData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched.")
        }, 3000);
    });
}

//Here's a second promise which fetches comment data

function fetchCommentData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment data fetched..")
        }, 3000)
    })
}


//Now let us have a function to fetch the data using async-await

async function getData() {

    try{
    console.log("Fetching Blog Data");
    
    const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);

    console.log(postData);
    console.log(commentData);    

    console.log("Fetch complete..");
    

    } catch (error){
        console.error("Error fetching data.")
    }
}

getData();