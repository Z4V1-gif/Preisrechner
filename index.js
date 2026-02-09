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
// Liste aller Buttons der Klasse .meal
const totalElement = document.querySelector(".total");
const orderListElement = document.querySelector(".order-list");
const resetButton = document.getElementById("reset");

let total = 0;

function addPrice(price) {
  total += price;
  console.log(price, total);
  console.log("Der Gesamtpreis liegt bei " + total + "€");
  updateTotal();
  // countShow();
}

function addToOrder(name, price) {
  const item = document.createElement("div");
  // wird eine theoretisch leeres div erstellt
  item.textContent = name + " + " + price.toFixed(2) + " €";

  orderListElement.appendChild(item);
  //appendChild = Hänge dieses Element unten an
  orderListElement.scrollTop = orderListElement.scrollHeight;
  //scrollTop aktuelle Scroll-Position
  //scrollHeight gesamte Höhe des Inhalts
  // automatisches nach unten Scrollen der Orderlist
}

function updateTotal() {
  totalElement.textContent = total.toFixed(2);
}

function resetList() {
  total = 0;
  updateTotal();

  orderListElement.innerHTML = "";
  //setzt den Text in total auf 0
}

resetButton.addEventListener("click", resetList);
// es muss immer ("click", + auszuführende function);
//übergibt dem Eventlistener die Funktion für den resetbutton

mealButtons.forEach((button) => {
  //forEach geht jedes Element der Liste einzeln durch
  button.addEventListener("click", () => {
    //bei click führe den Code aus, jeder Button eigene funktion
    const priceText = button.querySelector(".price").textContent; // Suche im Button nach dem Element(price), textConent=hol den Text daraus
    const price = parseFloat(priceText.replace("€", "").replace(",", "."));

    const name = button.childNodes[0].textContent.trim();
    //childNodes[0] nimm das erste Kind des Buttons (Text)
    //texConent holt den Text (Kaffee)
    //Trim entfernt Leerzeichen und Zeilenumbrüche

    addPrice(price);
    addToOrder(name, price);
  });
});
