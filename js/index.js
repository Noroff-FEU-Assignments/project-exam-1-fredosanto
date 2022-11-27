const contentContainer = document.querySelector(".carousel");

// const url = "https://fredo.one/nocreaseblog/wp-json/wc/store/v1/products?per_page=12";
const url = "https://fredo.one/nocreaseblog/wp-json/wp/v2/posts?per_page=100&_embed";

async function getContent() {
    try {
        const response = await fetch(url);
        const results = await response.json()

        // console.log(results[0])

        results.forEach((article) => {
            contentContainer.innerHTML += `<div class="carousel-post">
                                                <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="" />
                                                <div class="carousel-post-info">
                                                    <a href="/article.html?id=${article.id}">
                                                    <h3>${article.title.rendered}</h3>
                                                    </a>
                                                    <div class="category-tag carousel-tag">${article._embedded["wp:term"][0][0].name}</div>
                                                    <p>${article.excerpt.rendered}</p>
                                                </div>
                                            </div>`;
        })

    }

    catch(error) {
        console.log(error);
    }
};

getContent()    

function init() {
    const arrowLeft = document.querySelector(".left-arrow")
    const arrowRight = document.querySelector(".right-arrow")
    const contentContainer = document.querySelector(".carousel");
    console.log(arrowRight)
    function handleNavigation(interaction) {
        const {clientWidth, scrollLeft} = contentContainer;
        console.log(clientWidth)
        console.log('contentContainer', contentContainer)
        // const carouselWidth = contentContainer.clientWidth;
        // const scrollLeft = contentContainer.scrollLeft;
        let scrollX 
            if(interaction === 'left') {
                scrollX = scrollLeft - clientWidth;
            }
            if(interaction === 'right') {
                scrollX = scrollLeft + clientWidth;
            }
            console.log(scrollX)
            contentContainer.scroll({top:0, left:scrollX, behavior:"smooth"})
    }

    arrowLeft.addEventListener('click', () => handleNavigation('left'));
    arrowRight.addEventListener('click', () => handleNavigation('right'));
}

init();







// document.addEventListener("click", carouselEvent => {
//     let carouselClick
//     if (carouselEvent.target.matches(".slide-arrow")) {
//         carouselClick = carouselEvent.target
//     } else {
//         carouselClick = carouselEvent.target.closest(".slide-arrow")
//     }

//     if (carouselClick != null) {
//         onSlideClick(carouselClick)
//     }
// })


// function onSlideClick(carouselClick) {
//     const carousel = carouselClick.closest(".latest-posts").querySelector(".carousel")
//     const carouselIndex = parseInt(getComputedStyle(carousel).getPropertyValue("--carousel-index"))
    
//     if (carouselClick.classList.contains("left-arrow")) {
//         if(carouselIndex - 1 < 0) {
//             carousel.style.setProperty("--carousel-index", carouselIndex - 0)
//         } else {
//             carousel.style.setProperty("--carousel-index", carouselIndex - 1)
//         }
//     }

//     if (carouselClick.classList.contains("right-arrow")) {
//         // if(carouselIndex + 1 <= 2) {
//             carousel.style.setProperty("--carousel-index", carouselIndex + 1)
//         // }
//         // if(carouselIndex + 1 <= 3) {
//         //     carousel.style.setProperty("--carousel-index", carouselIndex + 1)
//         // }
//     }
// }