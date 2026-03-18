<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DM Shoes - Checkout</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'navbar.php'; ?>

    <section class="checkout">
        <div class="container">
            <h2>Checkout</h2>
            <div class="checkout-container">
                <div class="checkout-items">
                    <h3>Order Summary</h3>
                    <table class="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Cart items will be populated by JS -->
                        </tbody>
                    </table>
                    <div class="checkout-summary">
                        <!-- Summary will be populated by JS -->
                    </div>
                </div>

                <div class="checkout-form">
                    <h3>Billing Information</h3>
                    <form action="#" method="post">

                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>

                        <label for="card-name">Cardholder Name</label>
                        <input type="text" id="card-name" name="card-name" required>

                         <h3 style="margin-top: 2rem;">Shipping Address</h3>
                        
                        <label for="address">Street Address</label>
                        <input type="text" id="address" name="address" required>

                        <label for="city">City</label>
                        <input type="text" id="city" name="city" required>

                      
                        <label for="country">Country</label>
                        <input type="text" id="country" name="country" required>
                                                                                                                                                                                                                                                    
                        <button type="submit" class="checkout-btn">Complete Purchase</button>
                        <a href="products.php" class="continue-shopping">Continue Shopping</a>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2026 DM Shoes. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>