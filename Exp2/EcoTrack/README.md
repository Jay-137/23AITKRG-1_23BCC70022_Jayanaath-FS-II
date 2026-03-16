# Eco-Track (Experiment 2)

Eco-Track Exp2 is an evolved version of the carbon tracking application, now featuring a secure authentication system, protected routes, and an organized dashboard layout with nested navigation.

## New Features

* **Authentication System**: Implemented using React Context API to manage global login states across the application.
* **Protected Routing**: A dedicated security layer that restricts access to the dashboard and logs, redirecting unauthenticated users to the Login page.
* **Nested Dashboard Layout**: A unified dashboard interface containing sub-navigation for specialized views (Summary, Analytics, and Settings).
* **Programmatic Navigation**: Uses React Router hooks to redirect users dynamically after login or logout actions.

## Project Structure

* **`src/contexts/`**: Contains `AuthContext.jsx`, which provides the `isLoggedIn` state and `setIsLoggedIn` updater to the entire app.
* **`src/protectedroutes/`**: Contains logic to gate-keep private content from unauthorized users.
* **`src/pages/`**:
* `Login.jsx`: Handles user authentication and navigation to the home route.
* `DashboardLayout.jsx`: Provides the primary structure and navigation links for the dashboard sub-pages.
* `DashboardSummary.jsx`, `DashboardAnalytics.jsx`, `DashboardSettings.jsx`: Specific views nested within the main dashboard.
* `Logs.jsx`: Displays filtered activities with a carbon footprint of 4kg or higher.


* **`src/App.jsx`**: Configures the main routing architecture using `BrowserRouter`, including nested and protected route definitions.

## Tech Stack

* **Frontend**: React 19
* **Routing**: React Router DOM 7
* **Build Tool**: Vite 7

## Installation and Setup

1. Navigate to the `Exp2` directory.
2. Install dependencies:
```bash
npm install

```


3. Start the development server:
```bash
npm run dev

```



## Routing Map

* `/login`: Public login page.
* `/`: Main Dashboard (Protected).
* `/summary`: Nested dashboard summary view.
* `/analytics`: Nested dashboard analytics view.
* `/settings`: Nested dashboard settings view.


* `/logs`: High-carbon activity log (Protected).
* `/logout`: Secure logout functionality (Protected).
