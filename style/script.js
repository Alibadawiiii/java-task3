let store = {
  name: "Tech Store",
  city: "Cairo",
  phone: "01012345678"
};

document.getElementById("store-name").textContent = store.name;
document.getElementById("store-info").textContent = store.city + " - " + store.phone;

let cart = [
  { name: "mouse", price: 250, qty: 2 },
  { name: "keyboard", price: 450, qty: 1 },
  { name: "headphones", price: 500, qty: 1 }
];

function firstUpper(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function renderCart(ulElement) {
  ulElement.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let itemTotal = product.price * product.qty;
    ulElement.innerHTML += "<li>" + firstUpper(product.name) + ": " + product.price + " EGP x " + product.qty + " = " + itemTotal + " EGP</li>";
  }
}

let mainList = document.getElementById("cart");
renderCart(mainList);

cart.push({ name: "monitor", price: 3000, qty: 1 });
cart.unshift({ name: "gift", price: 0, qty: 1 });
cart.pop();
cart.shift();

let updatedList = document.createElement("ul");
mainList.after(updatedList);
renderCart(updatedList);

document.getElementById("count").textContent = "Items in cart: " + cart.length;

let total = 0;
for (let i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].qty;
}
document.getElementById("total").textContent = "Total: " + total.toFixed(2) + " EGP";

let note = document.createElement("p");
if (total > 1000) {
  note.textContent = "Free shipping applied";
} else {
  let remaining = 1000 - total;
  note.textContent = "Buy for " + remaining + " EGP more to get free shipping";
}
document.getElementById("total").after(note);