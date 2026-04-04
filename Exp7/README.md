# Experiment 7: Advanced API Concepts (Validation & Pagination)

## Overview
This project upgrades a standard Spring Boot CRUD API to an enterprise-ready architecture. Instead of directly exposing database entities, this API implements **Data Transfer Objects (DTOs)** with strict validation rules. Furthermore, it handles large datasets efficiently by implementing both **Offset-Based** and high-performance **Cursor-Based** pagination strategies.

---

## Postman Testing Guide & Proof of Execution

### 1. Data Validation Failure (Invalid Data)
**Objective:** Prove that the `@Valid` annotations in the `PatientDTO` intercept and reject bad data before it reaches the database.

* **Method:** `POST`
* **Endpoint:** `http://localhost:8080/v1/patient`
* **Payload:**
```json
{
  "name": "", 
  "age": 0,
  "disease": ""
}
```
* **Expected Result:** A `400 Bad Request` returning a map of field errors (e.g., "Name is required", "Age must be greater than 0").

![Invalid Data Validation Failure](./Screenshots/Validation.png.png)

### 2. Successful Creation (Valid Data)
**Objective:** Verify that clean data passes the DTO constraints, is mapped to the `Patient` entity, and is successfully saved to the MySQL database.

* **Method:** `POST`
* **Endpoint:** `http://localhost:8080/v1/patient`
* **Payload:**
```json
{
  "name": "Rahul", 
  "age": 25,
  "disease": "Fever"
}
```
* **Expected Result:** A `200 OK` returning the newly created patient object with an auto-generated `id`.

![Valid Data Creation Success](./Screenshots/Post.png.png)

### 3. Offset-Based Pagination
**Objective:** Demonstrate traditional pagination using page numbers and chunk sizes, utilizing Spring Data JPA's `PageRequest`.

* **Method:** `GET`
* **Endpoint:** `http://localhost:8080/v1/patient/offset?pageNo=0&pageSize=5&sortBy=id&sortDir=DESC`
* **Expected Result:** A `200 OK` returning a `Page` object containing exactly 5 records, sorted in descending order by ID, along with metadata (total pages, total elements).

![Offset Based Pagination](./Screenshots/Offset.png.png)

### 4. Cursor-Based Pagination
**Objective:** Demonstrate high-performance pagination designed for infinite scrolling, using the `id` of the last fetched item as a pointer to fetch the next batch in $O(1)$ database seek time.

* **Method:** `GET`
* **Endpoint (First Request):** `http://localhost:8080/v1/patient/cursor?pageSize=5&sortDir=ASC`
* **Endpoint (Next Page Request):** `http://localhost:8080/v1/patient/cursor?cursor=5&pageSize=5&sortDir=ASC` *(Assuming 5 was the `nextCursor` from the previous response)*
* **Expected Result:** A `200 OK` returning a custom JSON object containing a `data` array of 5 records and a `nextCursor` value to use for the subsequent request.

![Cursor Pagination Request 1](./Screenshots/Cursor.png.png)
![Cursor Pagination Request 2](./Screenshots/cursor2.png.png)
