const resultsDOM = document.querySelector(".results");
const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".input");

formDOM.addEventListener("submit", getGiphy);

function getGiphy(e) {
  e.preventDefault();

  fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=UPZZq43RmUOLkGFHqFdbAY7FUsZ2yDL2"
  )
    .then((item) => {
      return item.json();
    })
    .then((data) => {
      const arrData = data.data;
      arrData.forEach((item) => {
        if (item.title.trim() == inputDOM.value.trim()) {
          resultsDOM.innerHTML="";
          const divItem = document.createElement("div");
          divItem.className = "item";
          resultsDOM.append(divItem);
          const imgDOM = document.createElement("img");
          const imgTitle = document.createElement("p");
          imgTitle.className="imgTitle"
          divItem.append(imgDOM, imgTitle);
          imgDOM.src = item.images.fixed_width.url;
          imgTitle.textContent = item.title;
        }

        console.log(item.title);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
