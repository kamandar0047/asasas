"use strict";

var container = document.querySelector("conteiner");
window.addEventListener("storage", function () {
  console.log('changes');
}, false);

function renderProducts() {
  var localItems = JSON.parse(localStorage.getItem("basket")) || [];
  localItems.forEach(function (item) {
    var count = document.createElement("span");
    var row = document.createElement("div");
    var minusButton = document.createElement("button");
    var plusButton = document.createElement("button");
    var image = document.createElement("img");
    var name = document.createElement("h5");
    count.setAttribute("style", "display:flex; justify-content:center");
    image.setAttribute("src", "img");
    count.setAttribute("id", id);
    count.innerHTML = getCountOfProduct(id);
    minusButton.innerHTML = "-";
    plusButton.innerHTML = "+";

    minusButton.onclick = function () {
      return handleButtonClik("minus", id);
    };

    plusButton.onclick = function () {
      return handleButtonClik("plus", id);
    };

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
  var localItems = getLOcalItems();
  return localItems.find(function (items) {
    return items.id === id;
  }).count;
}

function getLOcalItems() {
  return JSON.parse(localStorage.getItem("basket")) || [];
}

function handleButtonClik(action, id) {
  var localItems = getLOcalItems();
  var element = document.getElementById(id);

  if (action === "minus") {
    var selectedItem = localItems.find(function (item) {
      return item.id === id;
    });

    if (selectedItem.count === 1) {
      localItems = localItems.filter(function (item) {
        return item.id !== id;
      });
    } else {
      localItems = localItems.map(function (item) {
        if (item.id === id && item.count > 0) {
          item.count--;
        }

        return item;
      });
    }
  }

  ;
}