# Eco-Track (Experiment 1)

Eco-Track is a React-based web application designed to help users monitor their environmental impact by tracking carbon footprint data from various activities.

## Features

* **Carbon Dashboard**: Displays the total accumulated carbon footprint and a detailed list of all logged activities.
* **High-Impact Monitoring**: Automatically filters and displays specific activities that have a high carbon impact (greater than or equal to 4kg).
* **Dynamic Header**: A reusable component that provides consistent branding across the application.

## Project Structure

The application is organized into the following directory structure:

* **`src/components/`**: Contains reusable UI components like `Header.jsx`.
* **`src/pages/`**: Contains the main view components:
* `dashboard.jsx`: Manages the calculation and display of total carbon data.
* `logs.jsx`: Handles the logic for filtering high-impact activities.


* **`src/data/`**: Contains the central data store (`logs.js`) with activity records including IDs, activity names, and carbon values.
* **`src/App.jsx`**: The main entry point that assembles the Header, Dashboard, and Logs sections.

## Tech Stack

* **Frontend**: React 19
* **Build Tool**: Vite 7
* **Linting**: ESLint 9

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the `Exp1` directory.
2. Install the required dependencies:
```bash
npm install

```



### Running the Application

To start the development server, run:

```bash
npm run dev

```

To build the project for production, run:

```bash
npm run build

```
