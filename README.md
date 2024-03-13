# Ecommerce API
Developed a custom API using Node.js.

## 📦 Technologies 

* Node.js
* Express.js
* Postman
* MongoDB
* mongoose
* JWT tokens

## ✨ Functionalities
These APIs are tested using Postman, and some of them are consumed in the frontend for testing purposes. Here is what each API is responsible for:

### User Register API:  
* Users can register on the application using their username, email and password. 
* The backend generates a hash of the password using CryptoJS and stores it in the database.

### Login API:
* Users can log in using their credentials, with backend verification using JWT authentication. 
* Upon successful verification, an authentication token is assigned to the user and stored in the browser's local storage. 

### Products API:
* The Product API is responsible for storing the title, image, categories, and price of products in the database.
* This API is responsible for adding new products, getting a list of all products, or retrieving a single product from the database.

### Order API:
* The Order API is responsible for storing the userID, products, amount, and status of the order.
* This API is responsible for adding a new order of the user to the database.

### Cart API:
* The Cart API is responsible for storing products and the quantity of each product.
* This API is responsible for storing the items in the cart to the database.


## 🖼️ Screenshots 

![Home_Page](https://github.com/spatil1697/EcommAPI/assets/110406683/9b14f593-dcd0-4f64-b7f6-4a080ac38298)
