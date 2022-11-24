const aboutContainer = document.querySelector(".about");

const aboutUrl = "https://fredo.one/nocreaseblog/wp-json/wp/v2/pages/2";


async function getAboutContent() {
    try {
        const response = await fetch(aboutUrl);
        const about = await response.json();

        console.log(about);

        aboutContainer.innerHTML = `<div about_container>
                                    ${about.content.rendered}
                                    </div>`;
    }



    catch(error) {
        console.log(error);
    }
}

getAboutContent();
