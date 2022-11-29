const contentContainer = document.querySelector(".content");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts/" + id;

async function getPost() {
    try {
        const response = await fetch(url);
        const result = await response.json()

        console.log(result)

        document.title = `Post | ${result.title.rendered}`;
        contentContainer.innerHTML += `<div class="details_container">
                                        <h1 class="details_title">${result.title.rendered}</h1>
                                        <div class="details_content">${result.content.rendered}</div>
                                        </div>`;

    }

    catch(error) {
        console.log(error);
    }
};

getPost();

