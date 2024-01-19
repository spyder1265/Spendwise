"use client";

import CardGrid from "./CardGrid";

export const DashboardContent = function () {
  return (
    <div className="h-full w-full overflow-x-hidden px-4 py-2">
      <div className="max-w-full overflow-hidden">
        <CardGrid />
      </div>
    </div>
  );
};
