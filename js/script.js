// NAVBAR

const hamburgerToggle = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".nav-menu");

hamburgerToggle.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('active');
    console.log(event); 
});



const searchToggle = document.querySelector(".fa-magnifying-glass");
const searchField = document.querySelector(".search-field");

searchToggle.addEventListener('click', function(){
    searchField.classList.toggle('search');
})
