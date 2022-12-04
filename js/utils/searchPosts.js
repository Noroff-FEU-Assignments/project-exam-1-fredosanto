import { renderPosts } from "./renderPosts.js";

export function searchPosts(posts) {
    const search = document.getElementById("search")
    search.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredPosts = posts.filter(function (post){
            if (post.title.rendered.toLowerCase().includes(searchValue)) {
                return true;
            }
        });

        renderPosts(filteredPosts);
        
    };
};