
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Import the original App component
import FullWidthHeader from "./components/FullWidthHeader";
import FullWidthFooter from "./components/FullWidthFooter";

// This is a workaround since we can't directly modify App.tsx
const AppWrapper = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <FullWidthHeader />
        <main className="flex-grow w-full">
          <App />
        </main>
        <FullWidthFooter />
      </div>
    </Router>
  );
};

export default AppWrapper;
