## README: Experiment 5 – Application Testing & Debugging  

### 🌿 Project: EcoTrack v5.0  

**Aim:**  
To verify the correctness, reliability, and stability of the EcoTrack application by implementing automated testing using Jest, React Testing Library, Redux testing, snapshot testing, and mocking techniques.

---

### 🧪 Testing Techniques Implemented  

- **Unit Testing:**  
  Testing pure functions and Redux reducers independently using Jest.

- **Component Rendering Tests:**  
  Verifying UI elements render correctly using React Testing Library.

- **Snapshot Testing:**  
  Capturing UI structure using `toMatchSnapshot()` to detect unintended changes.

- **Redux Reducer Testing:**  
  Validating initial state and state transitions for async lifecycle actions.

- **Mock Store Testing:**  
  Simulating Redux state using `redux-mock-store` to test connected components.

- **Asynchronous Behavior Handling:**  
  Understanding dispatch flow using Redux Thunk middleware.

- **Debugging & Error Analysis:**  
  Identifying and resolving failing test cases systematically.

---

### 📂 Folder Structure  

```
src/
├── components/
│   └── Button.jsx          # UI component tested with rendering & snapshot
├── pages/
│   └── Logs.jsx            # Redux-connected component
├── store/
│   ├── logSlice.js         # Reducer & async thunk
│   └── store.js            # Redux store configuration
├── __tests__/
│   ├── Button.test.jsx
│   ├── Logs.test.jsx
│   └── logSlice.test.js
```

---

### 📝 Testing Logic

#### 1️⃣ Component Rendering Test

```javascript
test("testing if button rendered properly", () => {
  render(<Button textVal="Fetch logs" />);
  expect(screen.getByText(/Fetch logs/)).toBeInTheDocument();
});
```

---

#### 2️⃣ Snapshot Testing

```javascript
test("testing button UI snapshot", () => {
  const { container } = render(<Button textVal="Fetch logs" />);
  expect(container).toMatchSnapshot();
});
```

---

#### 3️⃣ Redux Mock Store Testing

```javascript
const mockStore = configureStore([thunk]);

test("mocking fetchLog api", () => {
  const store = mockStore({
    logs: {
      data: [
        { id: 1, activity: "Plane Travel", carbon: 4 },
        { id: 2, activity: "Electricity Usage", carbon: 6 },
        { id: 3, activity: "Cycling", carbon: 0 },
      ],
      status: "success",
      error: null,
    },
  });

  render(
    <Provider store={store}>
      <Logs />
    </Provider>
  );

  expect(screen.getByText(/Plane Travel/)).toBeInTheDocument();
});
```

---

#### 4️⃣ Reducer Testing

**Initial State Test**

```javascript
test("testing initial state of store", () => {
  const result = logReducer(undefined, { type: undefined });
  expect(result).toEqual({
    data: [],
    status: "idle",
    error: null,
  });
});
```

**Pending State Test**

```javascript
test("testing loading state when fetch is pending", () => {
  const action = { type: "logs/fetchlogs/pending" };
  const result = logReducer(undefined, action);
  expect(result.status).toBe("loading");
});
```

---

### 📈 Testing Results

- All unit tests passed successfully.
- Snapshot files were generated and validated.
- Redux mock store correctly simulated application state.
- Reducer state transitions were verified.
- UI behavior was automatically validated without manual checking.

---

### 🎯 Key Outcomes

- Improved application reliability through automated testing.
- Increased confidence in Redux state transitions.
- Protection against unintended UI changes via snapshot testing.
- Better debugging and systematic error analysis.
- Adoption of modern frontend testing practices.