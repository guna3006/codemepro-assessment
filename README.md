# Project Readme

## MySQL

This project involves the creation of tables for products and courier charges in a MySQL database, including data insertion from an Excel file. The MySQL database has been dockerized into an image for easy deployment.

## Backend

The backend of this project utilizes Node.js and Express.js as web application frameworks to expose APIs. Three APIs have been created:

1. **GET /products:** Retrieve all product lists.
2. **GET /courierCharge:** Retrieve courier charges.
3. **POST /orderPackage:** Respond to the request body of the product list by calculating packages and applying charges.

The backend application has been dockerized into an image for efficient deployment.

## Frontend

The frontend is developed using React.js as the framework. It consumes APIs from the backend, including /products, /courierCharge, and /orderPackage. The UI experience is enhanced with custom CSS and HTML tags. The frontend application has also been dockerized into an image for easy deployment.

## Dockerization

Both the MySQL database, backend, and frontend have been dockerized into images, providing a containerized environment for seamless deployment and scalability.

### Running the Project

To run the project, follow these steps:

1. Dockerize MySQL image and set up the database.
2. Dockerize Backend image.
3. Dockerize Frontend image.

Ensure Docker is installed on your system and configured properly.

Now Visit : http://localhost:8080

Feel free to explore and enhance this project according to your needs.

Happy coding!
