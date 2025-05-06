
// Since App.tsx is read-only, we'll need to create a wrapper component that will use our full-width header and footer

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Import the original App component
import FullWidthHeader from "./components/FullWidthHeader";
import FullWidthFooter from "./components/FullWidthFooter";

// This is a workaround since we can't directly modify App.tsx
// In a real scenario, we would modify App.tsx directly
const AppWrapper = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <FullWidthHeader />
        <main className="flex-grow">
          <App />
        </main>
        <FullWidthFooter />
      </div>
    </Router>
  );
};

export default AppWrapper;
