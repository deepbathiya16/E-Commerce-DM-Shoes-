<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DM Shoes - Browse Our Premium Shoe Collection</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'navbar.php'; ?>

    <section class="products">
        <div class="container">
            <h2>Our Products</h2>
            <div class="product-grid">
                <div class="product">
                    <img src="image/Nike Air Max 90.jpeg" alt="Nike Air Max 90">
                    <h3>Nike Air Max 90</h3>
                    <p>₹12999</p>
                    <button onclick="addToCart('Nike Air Max 90', '₹12999', 'image/Nike Air Max 90.jpeg')">Add to Cart</button>
                    <button onclick="buyNow('Nike Air Max 90', '₹12999', 'image/Nike Air Max 90.jpeg')" style="background-color: #ff6b35;">Buy Now</button>
                </div>
                <div class="product">
                    <img src="image/Puma Speedcat.jpeg" alt="Puma Speedcat">
                    <h3>Puma Speedcat</h3>
                    <p>₹14999</p>
                    <button onclick="addToCart('Puma Speedcat', '₹14999', 'image/Puma Speedcat.jpeg')">Add to Cart</button>
                    <button onclick="buyNow('Puma Speedcat', '₹14999', 'image/Puma Speedcat.jpeg')" style="background-color: #ff6b35;">Buy Now</button>
                </div>
                <div class="product">
                    <img src="image/Nike Sandal Comfort.jpeg" alt="Nike Sandal Comfort">
                    <h3>Nike Sandal Comfort</h3>
                    <p>₹7999</p>
                    <button onclick="addToCart('Nike Sandal Comfort', '₹7999', 'image/Nike Sandal Comfort.jpeg')">Add to Cart</button>
                    <button onclick="buyNow('Nike Sandal Comfort', '₹7999', 'image/Nike Sandal Comfort.jpeg')" style="background-color: #ff6b35;">Buy Now</button>
                </div>
                <div class="product">
                    <img src="image/Puma Suede Classic.jpeg" alt="Puma Suede Classic">
                    <h3>Puma Suede Classic</h3>
                    <p>₹11999</p>
                    <button onclick="addToCart('Puma Suede Classic', '₹11999', 'image/Puma Suede Classic.jpeg')">Add to Cart</button>
                    <button onclick="buyNow('Puma Suede Classic', '₹11999', 'image/Puma Suede Classic.jpeg')" style="background-color: #ff6b35;">Buy Now</button>
                </div>
                <div class="product">
                    <img src="image/Nike Revolution 6.jpeg" alt="Nike Revolution 6">
                    <h3>Nike Revolution 6</h3>
                    <p>₹8999</p>
                    <button onclick="addToCart('Nike Revolution 6', '₹8999', 'image/Nike Revolution 6.jpeg')">Add to Cart</button>
                    <button onclick="buyNow('Nike Revolution 6', '₹8999', 'image/Nike Revolution 6.jpeg')" style="background-color: #ff6b35;">Buy Now</button>
                </div>
                <div class="product">
                    <img src="image/Puma Court Classic Sneaker.jpeg" alt="Puma Court Classic Sneaker">
                    <h3>Puma Court Classic Sneaker</h3>
                    <p>₹10999</p>
                    <button onclick="addToCart('Puma Court Classic Sneaker', '₹10999', 'image/Puma Court Classic Sneaker.jpeg')">Add to Cart</button>
                    <button onclick="buyNow('Puma Court Classic Sneaker', '₹10999', 'image/Puma Court Classic Sneaker.jpeg')" style="background-color: #ff6b35;">Buy Now</button>
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