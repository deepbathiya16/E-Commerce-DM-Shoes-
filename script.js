// Simple JavaScript for DM Shoes website

// ============ Authentication ============
// Function to login user
function loginUser(email, password) {
    if (!email || !password) {
        alert('Please enter both email and password!');
        return false;
    }
    
    // Simple validation - in real app, this would be server-side
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    alert('Login successful!');
    return true;
}

// Function to logout user
function logoutUser() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
}

// Function to check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to get logged in user email
function getLoggedInUser() {
    return localStorage.getItem('userEmail') || '';
}

// Function to redirect to login if not authenticated
function checkAuthentication() {
    const currentPage = window.location.pathname.split('/').pop();
    const publicPages = ['login.html', 'register.html', ''];
    
    if (!publicPages.includes(currentPage) && !isUserLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Function to update navigation with user info
function updateNavigation() {
    if (isUserLoggedIn()) {
        const userEmail = getLoggedInUser();
        const nav = document.querySelector('nav ul');
        if (nav) {
            // Check if logout already exists
            const logoutBtn = document.querySelector('.logout-btn');
            if (!logoutBtn) {
                const logoutLink = document.createElement('li');
                logoutLink.innerHTML = `<a href="#" class="logout-btn" onclick="logoutUser(event)">Logout (${userEmail})</a>`;
                nav.appendChild(logoutLink);
            }
        }
    }
}

// Logout event handler
function logoutUser(event) {
    if (event) event.preventDefault();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
}

// ============ Cart functionality ============
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(productName, price, imageSrc) {
    // Check if user is logged in
    if (!isUserLoggedIn()) {
        alert('Please login to add items to cart!');
        window.location.href = 'login.html';
        return;
    }
    
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: parseFloat(price.replace('₹', '')), imageSrc, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

// Function to buy now (add to cart and go to checkout)
function buyNow(productName, price, imageSrc) {
    // Check if user is logged in
    if (!isUserLoggedIn()) {
        alert('Please login to continue!');
        window.location.href = 'login.html';
        return;
    }
    
    // Add item to cart
    const existingItem = cart.find(item => item.name === productName);
    if (!existingItem) {
        cart.push({ name: productName, price: parseFloat(price.replace('₹', '')), imageSrc, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Redirect to checkout
    window.location.href = 'checkout.html';
}

// Function to get cart
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to remove item from cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Function to display cart in checkout
function displayCart() {
    const cartTableBody = document.querySelector('.cart-table tbody');
    const checkoutSummary = document.querySelector('.checkout-summary');
    if (!cartTableBody || !checkoutSummary) return;

    cartTableBody.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const total = item.price * item.quantity;
        subtotal += total;
        const row = `
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${total}</td>
                <td><button class="cancel-btn" type="button" data-product="${item.name}">Cancel</button></td>
            </tr>
        `;
        cartTableBody.innerHTML += row;
    });

    // Add event listeners to cancel buttons
    document.querySelectorAll('.cancel-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.getAttribute('data-product');
            removeFromCart(productName);
        });
    });

    const shipping = subtotal > 0 ? 1000 : 0;
    const tax = subtotal > 0 ? subtotal * 0.08 : 0;
    const total = subtotal + shipping + tax;

    checkoutSummary.innerHTML = `
        <p><strong>Subtotal:</strong> ₹${subtotal.toFixed(2)}</p>
        ${shipping > 0 ? `<p><strong>Shipping:</strong> ₹${shipping}</p>` : ''}
        ${tax > 0 ? `<p><strong>Tax:</strong> ₹${tax.toFixed(2)}</p>` : ''}
        <p class="total"><strong>Total:</strong> ₹${total.toFixed(2)}</p>
    `;
}

// Add to cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication for protected pages
    checkAuthentication();
    
    const addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const price = product.querySelector('p').textContent;
            const imageSrc = product.querySelector('img').src;
            addToCart(productName, price, imageSrc);
        });
    });

    // Display cart if on checkout page
    if (window.location.pathname.includes('checkout.html')) {
        cart = getCart();
        displayCart();
    }
    
    // Update navigation with user info and logout button
    updateNavigation();
});

// Form submission
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
}

const loginForm = document.querySelector('.login form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = loginForm.querySelector('#email').value.trim();
        const password = loginForm.querySelector('#password').value.trim();
        
        if (loginUser(email, password)) {
            loginForm.reset();
            window.location.href = 'index.html';
        }
    });
}

const registerForm = document.querySelector('.register form');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Registration successful!');
        registerForm.reset();
    });
}

// Checkout form handling: validate basic fields and show a confirmation modal
const checkoutForm = document.querySelector('.checkout-form form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = checkoutForm.querySelector('#email').value.trim();
        const cardNumber = checkoutForm.querySelector('#card-number').value.replace(/\s+/g, '');
        const expiry = checkoutForm.querySelector('#expiry').value.trim();
        const cvv = checkoutForm.querySelector('#cvv').value.trim();

        if (!email || !cardNumber || !expiry || !cvv) {
            alert('Please fill in all required payment fields.');
            return;
        }

        if (!/^[0-9]{13,19}$/.test(cardNumber)) {
            alert('Please enter a valid card number (13-19 digits).');
            return;
        }

        if (!/^[0-9]{3,4}$/.test(cvv)) {
            alert('Please enter a valid CVV (3 or 4 digits).');
            return;
        }

        // Collect order summary text (subtotal/total) from the page
        const totalEl = document.querySelector('.checkout-summary .total');
        const totalText = totalEl ? totalEl.textContent : 'Total: N/A';

        // Create and show a simple confirmation modal
        const modal = document.createElement('div');
        modal.className = 'confirm-modal';
        modal.innerHTML = `\
            <div class="confirm-modal-content">\
                <h3>Thank you for your purchase!</h3>\
                <p>${totalText}</p>\
                <p>A confirmation email will be sent to <strong>${email}</strong>.</p>\
                <div class="confirm-actions">\
                    <button id="confirm-ok">OK</button>\
                </div>\
            </div>`;
        document.body.appendChild(modal);

        // Basic styles for the modal (inlined to avoid editing CSS file)
        const style = document.createElement('style');
        style.textContent = `
            .confirm-modal{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:9999}
            .confirm-modal-content{background:#fff;padding:2rem;border-radius:8px;max-width:420px;text-align:center}
            .confirm-modal-content h3{margin-bottom:1rem}
            .confirm-modal-content p{margin-bottom:.75rem}
            .confirm-actions button{background:#ff6600;border:none;color:#fff;padding:.6rem 1rem;border-radius:5px;cursor:pointer}
        `;
        document.head.appendChild(style);

        const okBtn = modal.querySelector('#confirm-ok');
        okBtn.addEventListener('click', function() {
            document.body.removeChild(modal);
            document.head.removeChild(style);
            checkoutForm.reset();
            // Optionally redirect to a thank-you page
            // window.location.href = 'thankyou.html';
        });
    });
}