<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DM Shoes - Contact</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'navbar.php'; ?>

    <section class="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email"  required >

                <label for="message">Message:</label>
                <textarea id="message" name="message" required  ></textarea>

                <button type="submit">Send Message</button>
            </form>
            <p>Address: 123 Shoe Street, City, Country</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@dmshoes.com</p>
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