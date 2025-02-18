// app/page.tsx
"use client";

import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import PolicyMapComponent from "@/components/PolicyMapComponent"; // Adjust the path as necessary

const PolicyMapPage: React.FC = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div>
      <NavigationBar tab={tab} setTab={setTab} />
      {tab === 0 ? (
        <PolicyMapComponent />
      ) : (
        <h1>Contact us in progress</h1>
      )}
    </div>
  );
};

export default PolicyMapPage;