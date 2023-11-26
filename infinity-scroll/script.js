// elements
const imageContainer = document.getElementById("image-container");

let photosArray = [];

const count = 3;
const apiKey = "hgi7tnqahAD5EQYIEV83Rls5NfT0Upsjmq-I-N3h00Q";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// set attributes

// display photos
function displayPhoto() {
    photosArray.forEach((photo) => {
        const item = document.createElement("a");
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target", "_blank");

        const image = document.createElement("img");
        image.setAttribute("src", photo.urls.regular);
        image.setAttribute("alt", photo.description);
        image.setAttribute("title", photo.description);

        item.appendChild(image);
        imageContainer.appendChild(item);
    });
}

// get photos from uplash API
async function getApi() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhoto();
    } catch (error) {}
}

getApi();
