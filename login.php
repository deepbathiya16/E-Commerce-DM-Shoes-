<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DM Shoes - Sign In to Your Account</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'navbar.php'; ?>

    <section class="login">
        <div class="container">
            <h2>Logi
                n to DM Shoes</h2>
            <form action="#" method="post">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="register.php">Register here</a></p>
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