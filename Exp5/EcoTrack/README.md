## README: Experiment 4 – Performance Optimization & Enterprise UI

### 🌿 Project: EcoTrack v4.0

**Aim:** To optimize application performance through memoization and code splitting while enhancing the user interface with Material UI components.

### ⚡ Optimization Techniques

* **Code Splitting:** Route-based lazy loading using `React.lazy()` and `Suspense` to minimize initial bundle size.
* **Memoization:** * `useMemo`: Preventing expensive filter recalculations on the `logs` data.
* `useCallback`: Stabilizing function references for event handlers.
* `React.memo`: Preventing unnecessary re-renders of child components.


* **Lifecycle Persistence:** Using `location.key` with `Suspense` boundaries to ensure loading indicators trigger correctly across route transitions.

### 🎨 UI Enhancement

* **Material UI (MUI):** Implementation of a professional design system.
* **Loading Feedback:** Global and component-level progress indicators using `<CircularProgress />`.
* **Layout Logic:** Refactoring `DashboardLayout` to maintain a persistent sidebar during code-split transitions.

### 📂 Folder Structure

```text
src/
├── components/
│   ├── Header.jsx       # MUI-enhanced header
│   └── TopLoader.jsx    # Progress bar component
├── pages/
│   ├── DashboardLayout.jsx  # Nested routes with Suspense
│   └── DashboardSummary.jsx # Lazy-loaded chunk
└── App.jsx              # Route-based code splitting

```

### 📝 Optimization Logic

```javascript
// memoizing high-carbon calculation
const highCarbon = useMemo(() => {
  return data.filter(log => log.carbon >= 4);
}, [data]); 

// Lazy loading example
const Logs = React.lazy(() => import("./pages/Logs"));

```

### 📈 Performance Results

* **Reduced Initial Payload:** Only essential code is loaded on the first visit.
* **Fluid Navigation:** Immediate visual feedback via Suspense fallbacks.
* **Stable UI:** Elimination of redundant re-renders for static UI elements.
