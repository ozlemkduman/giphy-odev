const resultsDOM = document.querySelector(".results");
const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".input");

formDOM.addEventListener("submit", getGiphy);
const value = inputDOM.value;
function getGiphy(e) {
  const value = inputDOM.value;
  e.preventDefault();
  console.log(value);
  const url =
    "https://api.giphy.com/v1/gifs/search?q=cheese&api_key=UPZZq43RmUOLkGFHqFdbAY7FUsZ2yDL2";
  const newUrl = url.replace("cheese", value);
  console.log(newUrl);

  fetch(newUrl)
    .then((item) => {
      return item.json();
    })
    .then((data) => {
      const arrData = data.data;
      arrData.forEach((item) => {
        const divItem = document.createElement("div");
        divItem.className = "item";
        resultsDOM.append(divItem);
        const imgDOM = document.createElement("img");
        imgDOM.className = "imgDiv";
        const imgTitle = document.createElement("p");
        imgTitle.className = "imgTitle";
        divItem.append(imgDOM, imgTitle);
        imgDOM.src = item.images.original.url;
        imgTitle.textContent = item.title;
      });
    })
    .catch((err) => {
      console.log(err);
    });

  resultsDOM.innerHTML = "";
}

function main() {
  fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=UPZZq43RmUOLkGFHqFdbAY7FUsZ2yDL2"
  )
    .then((item) => {
      return item.json();
    })
    .then((data) => {
      const arrData = data.data;
      arrData.forEach((item) => {
        const divItem = document.createElement("div");
        divItem.className = "item";
        resultsDOM.append(divItem);
        const imgDOM = document.createElement("img");
        imgDOM.className = "imgDiv";
        const imgTitle = document.createElement("p");
        imgTitle.className = "imgTitle";
        divItem.append(imgDOM, imgTitle);
        imgDOM.src = item.images.original.url;
        imgTitle.textContent = item.title;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
main();
