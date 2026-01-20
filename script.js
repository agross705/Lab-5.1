// DOM Elements
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

// Keeps track of the total cart price
let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");

  // Retrieves price stored in data attribute
  const price = parseFloat(item.dataset.price);

  // Subtracts price from total
  updateTotalPrice(-price);

  // Removes item from DOM
  item.remove();
}

// Runs when "Add Product" btn is clicked
addProductButton.addEventListener("click", () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Basic validation
  if (name === "" || isNaN(price) || price <= 0) {
    alert("Please enter a valid product name and price.");
    return;
  }

  // Create a new list item for the cart
  const listItem = document.createElement("li");
  listItem.classList.add("cart-item");

  // Store price directly on the element for later use
  listItem.dataset.price = price;

  // Product name span
  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  // Product price span
  const priceSpan = document.createElement("span");
  priceSpan.textContent = `$${price.toFixed(2)}`;

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", removeItem);

  // Append elements to list item
  listItem.appendChild(nameSpan);
  listItem.appendChild(priceSpan);
  listItem.appendChild(removeBtn);

  // Add item to the cart
  cart.appendChild(listItem);

  // Update total price
  updateTotalPrice(price);

  // Clear input fields
  productNameInput.value = "";
  productPriceInput.value = "";
});
