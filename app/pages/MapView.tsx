"use client";

import PolicyMapComponent from "@/components/PolicyMapComponent";
import { Analytics } from "@vercel/analytics/react"

const PolicyMapPage: React.FC = () => {
  return (
    <div>
      <Analytics />
      <PolicyMapComponent />
    </div>
  );
};

export default PolicyMapPage;