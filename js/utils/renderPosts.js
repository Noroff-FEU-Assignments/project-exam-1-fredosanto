export function renderPosts(posts) {
    const searchResults = document.querySelector(".results_container");
    searchResults.innerHTML = "";

    posts.forEach((post) => {
        searchResults.innerHTML += `<div class="result">
                                    <a href="/article.html?id=${post.id}">
                                        <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="" />
                                        <h4>${post.title.rendered}</h4>
                                    </a>
                                </div>`;
    })
};