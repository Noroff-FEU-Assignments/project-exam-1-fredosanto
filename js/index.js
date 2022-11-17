const contentContainer = document.querySelector(".content");

// const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts";

// async function getContent() {
//     try {
//         const response = await fetch(url);
//         const results = await response.json()

//         // console.log(results[0])

//         for (let i = 0; i < results.length; i++) {
//             console.log(results[i])

//             contentContainer.innerHTML += `<div>${results[0].content.rendered}"</div>`;

//         }


//     }

//     catch(error) {
//         console.log(error);
//     }
// };

// getContent()    


// contentContainer.innerHTML += `<div><img class="image" src="${results[0].images[0].src}"</div>
//                                         <div>${results[0].description}</div>`;


const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts/59";

async function getContent() {
    try {
        const response = await fetch(url);
        const results = await response.json()

        console.log(results)


        contentContainer.innerHTML += `<div class="details_container">
                                        <h1 class="details_title">${results.title.rendered}</h1>
                                        <div class="details_content">${results.content.rendered}</div>
                                        </div>`;


    }

    catch(error) {
        console.log(error);
    }
};

getContent() 