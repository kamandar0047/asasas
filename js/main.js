const container = document.querySelector("conteiner");
window.addEventListener("storage", function() {
    console.log('changes')
}, false);

function renderProducts() {
    const localItems = JSON.parse(localStorage.getItem("basket")) || [];

    localItems.forEach((item) => {

        const count = document.createElement("span");
        const row = document.createElement("div");
        const minusButton = document.createElement("button");
        const plusButton = document.createElement("button");
        const image = document.createElement("img");
        const name = document.createElement("h5");




        count.setAttribute("style", "display:flex; justify-content:center");
        image.setAttribute("src", "img");
        count.setAttribute("id", id)
        count.innerHTML = getCountOfProduct(id);
        minusButton.innerHTML = "-";
        plusButton.innerHTML = "+";
        minusButton.onclick = () => handleButtonClik("minus", id);
        plusButton.onclick = () => handleButtonClik("plus", id);


        row.appendChild(iamge);
        row.appendChild(name);
        row.appendChild(plusButton);

        row.appendChild(count);

        row.appendChild(minusButton);

        row.classList.add("row");

        container.appendChild(row);



    });
}

function getCountOfProduct(id) {
    const localItems = getLOcalItems();


    return localItems.find((items) => items.id === id).count;
}

function getLOcalItems() {
    return JSON.parse(localStorage.getItem("basket")) || [];
}

function handleButtonClik(action, id) {
    let localItems = getLOcalItems();
    const element = document.getElementById(id);

    if (action === "minus") {
        const selectedItem = localItems.find((item) => item.id === id);

        if (selectedItem.count === 1) {
            localItems = localItems.filter((item) => item.id !== id);
        } else {
            localItems = localItems.map((item) => {
                if (item.id === id && item.count > 0) {
                    item.count--;
                }
                return item;
            });
        }
    };
}