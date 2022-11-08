const contentContainer = document.querySelector(".content");

const url = "https://fredo.one/nocreaseblog/wp-json/wc/store/products/";

async function getContent() {
    try {
        const response = await fetch(url);
        const results = await response.json()

        console.log(results[0].content)

        for (let i = 0; i < results.length; i++) {
            console.log(results[i])
        }

        contentContainer.innerHTML += `<div><img class="image" src="${results[0].images[0].src}"</div>
                                        <div>${results[0].description}</div>`;

    }

    catch(error) {
        console.log(error);
    }
};

getContent()