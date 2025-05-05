
// Note: Since we can't modify Header.tsx directly (it's read-only),
// we'll create a wrapper component that applies the full-width styling

import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Header from "@/components/Header"; // Import the original Header

const FullWidthHeader = () => {
  const location = useLocation();
  const { subjectId } = useParams();
  
  // Determine if we should apply special styling for certain pages
  const isSubjectPage = location.pathname.includes('/subjects/');
  
  return (
    <div className={cn(
      "w-full sticky top-0 z-50", 
      isSubjectPage ? "bg-opacity-95 backdrop-blur-md" : ""
    )}>
      <Header />
    </div>
  );
};

export default FullWidthHeader;
