# Microservice-Based Application

This project demonstrates a **Microservice-based architecture** using **NestJS** for backend services and **Next.js with TypeScript** for the frontend.

It includes:

- Product Management Microservice
- Order Management Microservice
- Dynamic Signup Form UI generated from JSON configuration

---

# Tech Stack

## Backend
- NestJS
- NestJS Microservices (TCP communication)
- TypeScript
- REST APIs

## Frontend
- Next.js
- TypeScript
- React Hook Form
- Material UI

---

# Project Structure

```
project-root
│
├── product-service        # Product microservice
├── order-service          # Order microservice
└── frontend               # Next.js frontend application
```

---

# Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher)
- npm
- Git

Check versions:

```bash
node -v
npm -v
```

---

# Running the Backend Services

The backend consists of **two NestJS microservices**:

1. Product Service
2. Order Service

The **Order Service communicates with the Product Service** using NestJS microservice TCP transport.

---

# 1 Start Product Service

Open a terminal and navigate to:

```
cd product-service
```

Install dependencies:

```
npm install
```

Run the service:

```
npm run start:dev
```

This will start the **Product Microservice**.

---

# 2 Start Order Service

Open another terminal and navigate to:

```
cd order-service
```

Install dependencies:

```
npm install
```

Run the service:

```
npm run start:dev
```

The Order Service exposes REST APIs and communicates with the Product Service.

---

# Backend API Testing

You can test APIs using **Postman**, **curl**, or any API testing tool.

---

## 1 Create Product

POST

```
http://localhost:3000/order/product
```

Body:

```json
{
  "name": "Laptop",
  "price": 50000,
  "stock": 10
}
```

---

## 2 Get Products

GET

```
http://localhost:3000/order/products
```

---

## 3 Create Order

POST

```
http://localhost:3000/order
```

Body:

```json
{
  "productId": 1,
  "quantity": 2
}
```
While creating order please do give the productId which you have got it from creating product from respone. 
---

## 4 Get Orders with Product Details

GET

```
http://localhost:3000/order
```

This endpoint returns orders along with product information fetched from the Product Service.

---

# Frontend Setup (Next.js)

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3001
```
