const contentContainer = document.querySelector(".content");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts/" + id;
const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts/" + id + "?_embed";

// async function getPost() {
//     try {
//         const response = await fetch(url);
//         const result = await response.json()

//         console.log(result)

//         document.title = `Post | ${result.title.rendered}`;
//         contentContainer.innerHTML += `<div class="details_container">
//                                         <h1 class="details_title">${result.title.rendered}</h1>
//                                         <div class="details_content">${result.content.rendered}</div>
//                                         </div>`;

//     }

//     catch(error) {
//         console.log(error);
//     }
// };

// getPost();

async function getPost() {
    try {
        const response = await fetch(url);
        const result = await response.json()

        console.log(result)

        document.title = `Post | ${result.title.rendered}`;
        contentContainer.innerHTML += `<div class="details_container">
                                        <h1 class="details_title">${result.title.rendered}</h1>
                                        <a class="lightbox-image" href="#lightbox"><img src="${result._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="" /></a>
                                        <div class="lightbox_container" id="lightbox">
                                            <figure>
                                                <a href="#" class="lightbox-close"</a>
                                                <img src="${result._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="" />
                                            </figure>
                                        </div>
                                        <div class="details_content">${result.content.rendered}</div>
                                        </div>`;

    }

    catch(error) {
        console.log(error);
    }
};

getPost();

