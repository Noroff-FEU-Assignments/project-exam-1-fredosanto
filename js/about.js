import { tryCatchMessage } from "./utils/tryCatchMessage.js"

const aboutContainer = document.querySelector(".about");

const aboutUrl = "https://fredo.one/nocreaseblog/wp-json/wp/v2/pages/2";


async function getAboutContent() {
    try {
        const response = await fetch(aboutUrl);
        const about = await response.json();

        aboutContainer.innerHTML = `<div about_container>
                                    ${about.content.rendered}
                                    </div>`;
    }



    catch(error) {
        console.log(error);
        tryCatchMessage("error", error, ".about");
    }
}

getAboutContent();
