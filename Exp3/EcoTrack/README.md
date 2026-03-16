## Experiment 3 – Global State Management with Redux Toolkit

### 🌿 Project: EcoTrack v3.0

**Aim:** To implement a centralized global state management system using Redux Toolkit to handle asynchronous data fetching and complex state transitions.

### 🚀 Key Features

* **Centralized Store:** A single source of truth for all carbon log data.
* **Asynchronous Thunks:** Simulated API calls using `createAsyncThunk` with manual `Promise` delays to mimic real-world network latency.
* **Lifecycle Management:** Handling of `pending`, `fulfilled`, and `rejected` states via `extraReducers`.
* **Global Hooks:** Seamless data retrieval and action triggering using `useSelector` and `useDispatch`.

### 🛠️ Tech Stack

* **React:** Frontend library.
* **Redux Toolkit (RTK):** State management.
* **React-Redux:** Official React bindings for Redux.

### 📂 Folder Structure

```text
src/
├── store/
│   ├── store.jsx       # Root Redux configuration
│   └── logSlice.jsx   # Slice for carbon log logic
├── pages/
│   └── Logs.jsx        # UI component consuming global state
└── main.jsx            # Provider integration

```

### 📝 Implementation Snippet

```javascript
// Example of the Async Thunk used
export const fetchLogs = createAsyncThunk("logs/fetch", async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(localData), 1000);
  });
});

```

---

