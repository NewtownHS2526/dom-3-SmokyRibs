
let totalInCent = 0;

const stickerButton = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const plushButton = document.querySelector("#plush");
const comicButton = document.querySelector("#comic");
const mysteryButton = document.querySelector("#mystery");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

const updateTotal = () => {
    totalSpan.textContent = totalInCent / 100;
}

const addSticker = () => {
    shoppingCart.innerHTML += `<p> Sticker </p>`;
    totalInCent += 75;
    updateTotal();
}
const addKeychain = () => {
    shoppingCart.innerHTML += `<p> Keychain </p>`;
    totalInCent += 125;
    updateTotal();
}
const addPlush = () => {
    shoppingCart.innerHTML += `<p> Plush </p>`;
    totalInCent += 30;
    updateTotal();
}

const addComic = () => {
    shoppingCart.innerHTML += `<p> Comic </p>`;
    totalInCent += 450;
    updateTotal();
}   
const addMystery = () => {
    shoppingCart.innerHTML += `<p> Mystery Item </p>`; 
    totalInCent += 200;
    updateTotal();
}
// Event Listeners

stickerButton.addEventListener("click", addSticker);
keychainButton.addEventListener("click", addKeychain);
plushButton.addEventListener("click", addPlush);
comicButton.addEventListener("click", addComic);
mysteryButton.addEventListener("click", addMystery);