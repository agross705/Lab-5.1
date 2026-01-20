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
  const itemTotal = parseFloat(item.dataset.price);

  // Subtracts price from total
  updateTotalPrice(-itemTotal);

  // Removes item from DOM
  item.remove();
}

// Updates quantity and price for a specific cart item
function updateQuantity(item, change) {
  let quantity = parseInt(item.dataset.quantity);
  const price = parseFloat(item.dataset.price);

  // Prevent quantity from going below 1
  if (quantity + change < 1) return;

  // Update quantity
  quantity += change;
  item.dataset.quantity = quantity;

  // Calculate new item total
  const newItemTotal = quantity * price;

  // Update overall total price
  const previousItemTotal = parseFloat(item.dataset.itemTotal);
  updateTotalPrice(newItemTotal - previousItemTotal);

  // Store new item total
  item.dataset.itemTotal = newItemTotal;

  // Update DOM text
  item.querySelector('.quantity').textContent = quantity;
  item.querySelector('.item-total').textContent = `$${newItemTotal.toFixed(2)}`;
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
  listItem.dataset.quantity = 1;
  listItem.dataset.itemTotal = price;

  // Product name span
  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  // Quantity controls
  const decreaseBtn = document.createElement('button');
  decreaseBtn.textContent = '-';

  const quantitySpan = document.createElement('span');
  quantitySpan.classList.add('quantity');
  quantitySpan.textContent = '1';

  const increaseBtn = document.createElement('button');
  increaseBtn.textContent = '+';

  // Product price span
  const priceSpan = document.createElement("span");
  priceSpan.classList.add('item-total');
  priceSpan.textContent = `$${price.toFixed(2)}`;

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  increaseBtn.addEventListener('click', () => updateQuantity(listItem, 1));
  decreaseBtn.addEventListener('click', () => updateQuantity(listItem, -1));
  removeBtn.addEventListener("click", removeItem);

  // Append elements to list item
  listItem.appendChild(nameSpan);
  listItem.appendChild(decreaseBtn);
  listItem.appendChild(quantitySpan);
  listItem.appendChild(increaseBtn);
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
