// const PRICES = {
//   kaffee: 3.5,
//   tee: 2.5,
//   apfelschorle: 4.0,
//   wasser: 2.0,
//   bratwurst: 5.5,
//   schnitzel: 12.5,
//   currywurst: 6.0,
//   brezel: 4.5,
//   käsespätzle: 8.0,
//   pommes: 3.5,
//   apfelstrudel: 4.5,
//   berliner: 3.0,
//   schwarzwälder: 5.0,
//   brötchen: 2.5,
//   leberkäse: 7.0,
//   kartoffelsalat: 6.5,
// };

const mealButtons = document.querySelectorAll(".meal");
const totalElement = document.querySelector(".total");

let total = 0;

function addPrice(price) {
  total += price;
  updateTotal();
  // countShow();
}

function updateTotal() {
  totalElement.textContent = total.toFixed(2);
}

mealButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const priceText = button.querySelector(".price").textContent;
    const price = parseFloat(priceText.replace("€", "").replace(",", "."));
    addPrice(price);
  });
});

// function countShow() {
//   var element = document.getElementById("total-price");
//   console.log(element);
//   element.innerHTML = total + price;
// }
