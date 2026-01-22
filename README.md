# 📦 Inventory Allocation System  
### Demo Task 2 – Node.js + React.js

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose with Transactions)  
- **Frontend:** React.js (Minimal UI)  
- **Architecture Pattern:**  
  **Controller → Service → Repository → Model**

---

## 🎯 Objective
This project demonstrates **clean backend architecture**, **strict API discipline**, and **concurrency-safe inventory allocation** using **only one API**, as required by the assignment.

The focus of this task is on:
- Backend responsibility
- Business logic placement
- Transaction safety
- Race condition prevention

---

## 📁 Folder Structure

src/
├── routes/ # API routes (only one route)
├── controllers/ # Handles HTTP request & response only
├── services/ # Contains all business logic
├── repositories/ # Handles database operations
├── models/ # MongoDB schemas
├── config/ # Database configuration
└── app.js
server.js
frontend/ # React frontend


---

## 🚀 API Design (STRICTLY FOLLOWED)

### ➤ POST `/api/order`  *(ONLY API USED)*

This single API performs **all required operations**:
- Validate product existence  
- Validate available stock  
- Deduct stock  
- Create order  
- Prevent negative stock  
- Handle concurrent requests safely  

❌ No additional APIs were created  
❌ No logic was split into multiple endpoints  

This design strictly follows the assignment rule of using **only one API**.

---

## 🧠 Business Logic Placement

The application follows clear separation of concerns:

### 🔹 Controller Layer
- Handles HTTP request and response only  
- Contains **no business logic**

### 🔹 Service Layer
- Implements all business logic:
  - Product validation
  - Stock validation
  - Order processing
  - Transaction handling

### 🔹 Repository Layer
- Handles all database interactions  
- Keeps database logic separate from business logic  

This ensures clean, maintainable, and testable code.

---

## 🔐 Concurrency & Race Condition Handling

- MongoDB **sessions and transactions** are used  
- MongoDB is run in **Replica Set mode** to support transactions  
- Stock deduction and order creation are executed in **one atomic transaction**  
- Prevents race conditions and negative stock scenarios  

### ✅ Edge Case Handled (Mandatory)
- Product stock = **5**  
- Order 1 → quantity **3** → ✅ success  
- Order 2 → quantity **3** → ❌ fails  

This confirms correct concurrency handling.

---

## 🖥 Frontend (React Implementation)

- Simple React form with:
  - Product ID input
  - Quantity input
- Calls the same `POST /api/order` API
- Displays success or error message
- **No business logic or validation** handled on frontend  

The frontend is intentionally minimal as per assignment instructions.

---

## ▶️ How to Run the Project

### Backend
```bash
npm install
node server.js

cd frontend
npm install
npm start
