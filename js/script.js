// NAVBAR

const hamburgerToggle = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".nav-menu");

const searchToggle = document.querySelector(".fa-magnifying-glass");
const searchField = document.querySelector(".search-field");
const searchResults = document.querySelector(".results_container");
const search = document.getElementById("search")
const urlSearch = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts?per_page=100&_embed";



hamburgerToggle.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('active');
    
    if (searchField.classList.contains('active')) {
        searchField.classList.toggle('active');
    }
});



searchToggle.addEventListener('click', function(){
    searchField.classList.toggle('active');

    if (hamburgerMenu.classList.contains('active')) {
        hamburgerMenu.classList.toggle('active');
    }
})

async function renderPosts() {
    try {
        const response = await fetch(urlSearch);
        const posts = await response.json()

        console.log(posts);

        posts.forEach((post) => {
            searchResults.innerHTML += `<div class="result">
                                            <a href="/article.html?id=${post.id}">
                                                <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="" />
                                                <h4>${post.title.rendered}</h4>
                                            </a>
                                        </div>`;
        })
    }

    catch(error) {
        console.log(error)
    }
}
renderPosts();

search.onclick = function () {
    console.log(event);
}


