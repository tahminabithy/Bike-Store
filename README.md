# Bike Store Application

## Overview

The Bike Store application is a RESTful API built using Express.js, TypeScript, and MongoDB (with Mongoose). It manages bike products and customer orders, ensuring data integrity through Mongoose schema validation. The API supports CRUD operations for bikes and orders, as well as revenue calculations.

## Key Features

1. Create a Bike: Add new bikes to the inventory.
2. Get All Bikes: Retrieve a list of all bikes, with filtering options by name, brand, or category.
3. Get a Specific Bike: Fetch details of a bike by its unique ID.
4. Update a Bike: Modify details like price or quantity of an existing bike.
5. Delete a Bike: Remove a bike from the inventory.
6. Order a Bike: Place orders and update inventory.
7. Calculate Revenue: Use aggregation to compute total revenue from orders.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Postman (for API testing)

## Installation and Setup

1. Clone the repository:
   git clone <repository_url>
   cd bike-store

2. Install dependencies:
   npm install

3. Configure environment variables:

   - Create a `.env` file in the project root.
   - Add the following:
     ```
     PORT=5003
     DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/bike-store
     ```

4. Start the development server:
   npm run dev

## API Endpoints

1. **Create a Bike**: POST /api/products
2. **Get All Bikes**: GET /api/products
   - Query parameter: `searchTerm` (name, brand, or category)
3. **Get a Specific Bike**: GET /api/products/:productId
4. **Update a Bike**: PUT /api/products/:productId
5. **Delete a Bike**: DELETE /api/products/:productId
6. **Order a Bike**: POST /api/orders
7. **Calculate Revenue**: GET /api/orders/revenue

## Error Handling

All error responses follow a generic structure:
{
"message": "Error message",
"success": false,
"error": { ...details },
"stack": "Stack trace (in development mode)"
}

## Scripts

- Start development server: npm run dev
- Build for production: npm run build

## Future Enhancements

- User authentication and authorization.
- Pagination for bike listings.
- Advanced filtering and sorting options.
