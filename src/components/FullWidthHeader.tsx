
import React from "react";
import Header from "@/components/Header"; // Import the original Header

const FullWidthHeader = () => {
  return (
    <div className="w-full sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-md">
      <Header />
    </div>
  );
};

export default FullWidthHeader;
