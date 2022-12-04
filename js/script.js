// NAVBAR
import { renderPosts } from "./utils/renderPosts.js"; 
import { searchPosts } from "./utils/searchPosts.js"; 
import { tryCatchMessage } from "./utils/tryCatchMessage.js"

const hamburgerToggle = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".nav-menu");

const searchToggle = document.querySelector(".fa-magnifying-glass");
const searchField = document.querySelector(".search-field");

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



const urlSearch = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts?per_page=100&_embed";


async function getSearchResults() {
    try {
        const response = await fetch(urlSearch);
        const posts = await response.json()

        // let postsResults = posts; 
        renderPosts(posts);
        searchPosts(posts);

        // console.log(posts);
    
    }

    catch(error) {
        console.log(error)
        tryCatchMessage("error", error, ".results_container");
    }
}
getSearchResults();




