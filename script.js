// DOM Elements
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

// Keeps track of the total cart price
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {  
  const item = event.target.closest('li');

  // Retrieves price stored in data attribute
  const price = parseFloat(item.dataset.price);

  // Subtracts price from total
  updateTotalPrice(-price);

  // Removes item from DOM
  item.remove();
}