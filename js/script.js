// NAVBAR

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
