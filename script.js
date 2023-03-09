const resultsDOM = document.querySelector(".results");
const formDOM = document.querySelector(".form");
const inputDOM = document.getElementsByTagName("input");

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
        console.log(item.title);
        const divItem = document.createElement("div");
        divItem.className="item"
        resultsDOM.append(divItem);
        const imgDOM = document.createElement("img");
        divItem.append(imgDOM);
        console.log(item);
        imgDOM.src= item.images.fixed_width.url;
         
        console.log(item.title, "eşit", );
     
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
