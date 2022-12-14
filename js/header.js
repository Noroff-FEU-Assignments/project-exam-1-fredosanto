const headerPost = document.querySelector(".main-post");


const postsUrl = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts?_embed";

async function getMainPost() {
    try {
        const response = await fetch(postsUrl);
        const mainPost = await response.json();

        // console.log(mainPost[0])
        

        headerPost.innerHTML = `<div class="main-post_container main-post_content">
                                    <h1>${mainPost[0].title.rendered}</h1>
                                    <a href="" class="category-tag">${mainPost[0]._embedded["wp:term"][0][0].name}</a>
                                    <p>${mainPost[0].excerpt.rendered
                                    }</p>
                                    <a href="/article.html?id=${mainPost[0].id}" class="read-tag">Read more</a>
                                </div>
                                <div class="main-post_container main-post_image">
                                    <img src="${mainPost[0]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="${mainPost[0]._embedded["wp:featuredmedia"][0].alt_text}"/>
                                    </div>`;
        
     }

    catch(error) {
        console.log(error);
    }
};

getMainPost();