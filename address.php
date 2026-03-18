<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DM Shoes - Addresses</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'navbar.php'; ?>

    <section class="addresses">
        <div class="container">
            <h2>Saved Addresses</h2>
            
            

            <h3 style="text-align: center;">Add Address</h3>
            <form class="address-form" action="#" method="post">
                <label for="full-name">Full Name:</label>
                <input type="text" id="full-name" name="full-name" required>

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required>

                <label for="street-address">Street Address:</label>
                <input type="text" id="street-address" name="street-address" required>

               
                <label for="city">City:</label>
                <input type="text" id="city" name="city" required>


                <label for="country">Country:</label>
                <input type="text" id="country" name="country" required>


                <button type="submit">Save Address</button>
            </form>
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