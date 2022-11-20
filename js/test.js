


const contentContainer = document.querySelector(".carousel");

const url = "https://fredo.one/nocreaseblog/wp-json/wc/store/v1/products?per_page=12";

async function getContent() {
    try {
        const response = await fetch(url);
        const results = await response.json()

        // console.log(results[0])

        for (let i = 0; i < results.length; i++) {
            console.log(results[i])
            
            contentContainer.innerHTML += `<div class="carousel-post">
                                                <img src="${results[i].images[0].src}" alt="" />
                                                <a href="#" class="category-tag carousel-tag">${results[i].categories[0].name}</a>
                                                <div class="carousel-post-info">
                                                    <h3>${results[i].name}</h3>
                                                    <p>${results[i].short_description}</p>
                                                </div>
                                            </div>`;

        }


    }

    catch(error) {
        console.log(error);
    }
};

getContent()    

document.addEventListener("click", carouselEvent => {
    let carouselClick
    if (carouselEvent.target.matches(".slide-arrow")) {
        carouselClick = carouselEvent.target
    } else {
        carouselClick = carouselEvent.target.closest(".slide-arrow")
    }

    if (carouselClick != null) {
        onSlideClick(carouselClick)
    }
})


function onSlideClick(carouselClick) {
    const carousel = carouselClick.closest(".latest-posts").querySelector(".carousel")
    const carouselIndex = parseInt(getComputedStyle(carousel).getPropertyValue("--carousel-index"))
    
    if (carouselClick.classList.contains("left-arrow")) {
        if(carouselIndex - 1 < 0) {
            carousel.style.setProperty("--carousel-index", carouselIndex - 0)
        } else {
            carousel.style.setProperty("--carousel-index", carouselIndex - 1)
        }
    }

    if (carouselClick.classList.contains("right-arrow")) {
        if(carouselIndex + 1 <= 2)
        carousel.style.setProperty("--carousel-index", carouselIndex + 1)
    }
}