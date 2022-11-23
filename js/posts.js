// let loadingButton = document.querySelector(".loading-button");
// let currentPosts = 4;
const postsContainer = document.querySelector(".posts_container");
const showMoreBtn = document.querySelector(".show-more")

const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts?per_page=100&_embed";

async function getContent() {
    try {
        const response = await fetch(url);
        const results = await response.json()

        console.log(results[0])
        let postIndex = 2;
        showMoreBtn.onclick = function() {
            
        
        
        
        for (let i = 0; i < results.length; i++) {
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
// showMoreBtn.onclick = function(btnValue) {
//     // console.log(event.target.value)
//     let btnValue = event.target.value + 2;
//     return btnValue;
// }

// console.log(btnValue)

// {/* <script>
// const loadmore = document.querySelector('#loadmore');
//     let currentItems = 2;
//     loadmore.addEventListener('click', (e) => {
//         const elementList = [...document.querySelectorAll('.list .list-element')];
//         for (let i = currentItems; i < currentItems + 2; i++) {
//             if (elementList[i]) {
//                 elementList[i].style.display = 'block';
//             }
//         }
//         currentItems += 2;

//         // Load more button will be hidden after list fully loaded
//         if (currentItems >= elementList.length) {
//             event.target.style.display = 'none';
//         }
//     })
// </script> */}