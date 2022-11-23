const postsContainer = document.querySelector(".posts_container");
const showMoreBtn = document.querySelector(".show-more")

const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts?per_page=100&_embed";

async function getContent() {
    try {
        const response = await fetch(url);
        const results = await response.json()

        console.log(results[0])
        let postIndex = 2;
        
            
        
        
        
        for (let i = 0; i < 3; i++) {
            // console.log(results[i])
            postsContainer.innerHTML += `<div class="post_container">
                                            <div class"post-image_container">
                                                <img src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="" />
                                            </div>
                                            <div class="post-info">
                                                <a href="/post.html?id=${results[i].id}">
                                                <h2>${results[i].title.rendered}</h2>
                                                </a>
                                                <div class="category-tag carousel-tag">${results[i]._embedded["wp:term"][0][0].name}</div>
                                                <p>${results[i].excerpt.rendered}</p>
                                            </div>
                                        </div>`;
            
                                        
                                        // if(results.length <= 6) {
                                            
                                            // }
                                            // if(i < 6 && i > 3) {
                                                //     showMoreBtn.onclick = function() {
                                                    //     }
                                                    // }
                                                }
                                                
        showMoreBtn.onclick = function() {
            for (let i = 3; i < 6; i++) {
                // console.log(results[i])
                postsContainer.innerHTML += `<div class="post_container">
                                                <div class"post-image_container">
                                                    <img src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="" />
                                                </div>
                                                <div class="post-info">
                                                    <a href="/post.html?id=${results[i].id}">
                                                    <h2>${results[i].title.rendered}</h2>
                                                    </a>
                                                    <div class="category-tag carousel-tag">${results[i]._embedded["wp:term"][0][0].name}</div>
                                                    <p>${results[i].excerpt.rendered}</p>
                                                </div>
                                            </div>`;   
        }
    }
    }

    catch(error) {
        console.log(error);
    }
};

getContent()  