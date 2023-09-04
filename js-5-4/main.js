function findElement(element, parent = document) {
    return parent.querySelector(element);
}

function renderProducts(products, parent) {
    parent.innerHTML = null;
    products.forEach((element) => {
        const newCard = document.createElement("div");

        newCard.className = "col-3";

        newCard.innerHTML = `
            <div class="card">
                <img class="card-img-top" src="${element.image}" alt="${element.title}" />
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">$${element.price}</p>
                    <p class="card-text card-description">${element.description}</p>
                </div>
            </div>
        `;

        parent.appendChild(newCard);
    });
}

const elCards = findElement(".cards");
let favoriteProducts = [];
let products = [];

const BASE_URL = "https://64f4029b932537f4051a10f3.mockapi.io"

fetch(BASE_URL+"/products")
    .then((res) => res.json())
    .then((res) => {
        products = res;
        renderProducts(res, elCards);
       
    })
    .catch((err) => {
        alert(err);
    });

renderProducts(products, elCards);