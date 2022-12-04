import { tryCatchMessage } from "./utils/tryCatchMessage.js"

const postsContainer = document.querySelector(".posts_container");
const showMoreBtn = document.querySelector(".show-more")
const loading = document.querySelector(".loader")

const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts?per_page=100&_embed";

async function getContent() {
    
    try {
        const response = await fetch(url);
        const results = await response.json()

        const limit = 10
        let startindex = 0
        let endindex = limit

        setTimeout(function() {
            loading.classList.remove("spinner");
        }, 2000);
        
        const addArticle = (article) => {
            return`<div class="post_container">
                    <div class="post-image_container">
                        <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="${article._embedded["wp:featuredmedia"][0].alt_text}" />
                    </div>
                    <div class="post-info">
                        <a href="/article.html?id=${article.id}">
                        <h2>${article.title.rendered}</h2>
                        </a>
                        <div class="category-tag carousel-tag">${article._embedded["wp:term"][0][0].name}</div>
                        <p>${article.excerpt.rendered}</p>
                    </div>
                </div>`;
        }
        const articlesToAdd = results.slice(startindex, endindex)
        articlesToAdd.forEach((article) => {
            postsContainer.innerHTML += addArticle(article);

        })                            
        showMoreBtn.onclick = function addMoreArticles() {
            startindex = startindex + limit
            endindex = endindex + limit
            const articlesToAdd = results.slice(startindex, endindex)
            articlesToAdd.forEach((article) => {
                postsContainer.innerHTML += addArticle(article);
            })      

            if (endindex >= results.length){
                showMoreBtn.remove()
            }                     
        }
    }

    catch(error) {
        console.log(error);
        tryCatchMessage("error", error, ".posts_container");
    }
};

getContent()  