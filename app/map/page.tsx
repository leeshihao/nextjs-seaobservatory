// map/page.tsx
"use client";

import dynamic from 'next/dynamic';

// Load the map component only when needed (with no SSR)
const PolicyMapComponent = dynamic(
  () => import('@/components/PolicyMapComponent'),
  { ssr: false, loading: () => <div className="h-[400px] w-full flex items-center justify-center">Loading map...</div> }
);

const PolicyMapPage = () => {
  return (
    <div>
      <PolicyMapComponent />
    </div>
  );
};

export default PolicyMapPage;