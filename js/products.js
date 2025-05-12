const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const paymentModal = document.getElementById('payment-modal');
const paymentForm = document.getElementById("payment-form");
const proceedToPaymentButton = document.getElementById('proceed-to-payment');
const checkoutForm = document.getElementById('checkout-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const paymentMethodSelect = document.getElementById('payment-method');
const addressInput = document.getElementById("address-input")
const cardNumberInput =  document.getElementById("card-number");
const expiryDateInput = document.getElementById("expiry-date");
const cvvInput = document.getElementById("cvv");
const cardDetails = document.getElementById('card-details');
const confirmOrderButton = document.getElementById('confirm-order');
const closeButtons = document.querySelectorAll('.close');
const selectElements = document.querySelectorAll('select');

let cart = [];
let total = 0;
let clientName = "";
let email = "";
let phone = "";

function updateCart() {
    total = 0;

    cartItemsList.innerHTML = "";

    if (cart.length === 0) {
        cartItemsList.innerHTML = "<li>Your cart is empty.</li>";
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
            total += item.price;
        })
    }

    cartTotalSpan.textContent = total.toFixed(2);
    checkoutButton.style.display = total > 0 ? "block" : "none";
}

addToCartButtons.forEach(button => {
    button.addEventListener("click", function(){
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
        cart.push({name, price});
        updateCart();
    });
});

selectElements.forEach(selectElement => {
    selectElement.addEventListener("change", function() {
        const basePrice = parseFloat(this.dataset.basePrice);
        const multiplier = parseFloat(this.value);
        const newPrice = basePrice * multiplier;

        this.parentNode.querySelector(".add-to-cart").dataset.price = newPrice.toFixed(2);
    });
});

checkoutButton.addEventListener("click", function() {
    checkoutModal.style.display = "block";
});

checkoutForm.addEventListener("submit", function(event){
    event.preventDefault();
    clientName = nameInput.value.trim();
    email = emailInput.value.trim();
    phone = phoneInput.value.trim();

    checkoutModal.style.display = "none";
    paymentModal.style.display = "block";
});

paymentMethodSelect.addEventListener("change", function(){
    if (this.value === "card") {
        cardDetails.style.display = "block";
        // Enable required attributes if they were conditionally removed
        cardNumberInput.required = true;
        expiryDateInput.required = true;
        cvvInput.required = true;
    } else {
        cardDetails.style.display = "none";
        // Optionally remove required attributes
        cardNumberInput.required = false;
        expiryDateInput.required = false;
        cvvInput.required = false;
    }
});

// confirmOrderButton.addEventListener("click", function() {
//     alert("Order confirmed! Thank you!");
//     paymentModal.style.display = "none";
//     cart = [];
//     updateCart();
// });

paymentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Optional: Perform any additional checks or processing here
    const address = addressInput.value.trim();
    const paymentMethod = paymentMethodSelect.value;

    console.log("ORDER:");
    console.log(`Name: ${clientName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);

    console.log(`Address: ${address}`);
    console.log(`Payment Method: ${paymentMethod}`);

    if (paymentMethod === "card") {
        const cardNumber = cardNumberInput.value.trim();
        const expiryDate = expiryDateInput.value;
        const cvv = cvvInput.value.trim();

        console.log(`Card Number: ${cardNumber}`);
        console.log(`Expiry Date: ${expiryDate}`);
        console.log(`CVV: ${cvv}`);

        // Optionally validate card info format here
    }

    console.log(`TOTAL: ${total}`);

    alert("Order confirmed!");

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    addressInput.value = "";
    paymentMethodSelect.value = "cash";
    addressInput.value = "";
    cardNumberInput.value = "";
    expiryDateInput.value = "";
    cvvInput.value = "";

    paymentModal.style.display = "none";
    cart = [];
    total = 0;

    //If we want to clear the current order in the console
    // console.clear();

    updateCart();
});

closeButtons.forEach(button => {
    button.addEventListener("click", function(){
        checkoutModal.style.display = "none";
        paymentModal.style.display = "none";
    });
});

// Close modal when clicking outside the modal-content
window.addEventListener("click", function(event){
    if(event.target === checkoutModal){
        checkoutModal.style.display = "none";
    }
    if(event.target === paymentModal){
        paymentModal.style.display = "none";
    }
});