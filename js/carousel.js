// const arrowButton = document.querySelectorAll(".slide-arrow");

// arrowButton.addEventListener('click', function() {
//     console.log(event);
// })

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
    const carousel = carouselClick.closest(".latest-blogs").querySelector(".carousel")
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
