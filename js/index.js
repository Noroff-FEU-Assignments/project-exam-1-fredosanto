const contentContainer = document.querySelector(".content");

const url = "https://nocreaseblog.local/wp-json/wp/v2/posts";

async function getContent() {
    try {
        const response = await fetch(url);
        const results = await response.json()

        console.log(results[0].content)


    }

    catch(error) {
        console.log(error);
    }
};

getContent()