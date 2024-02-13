"use client";

import { useSession } from "next-auth/react";
import CardGrid from "./CardGrid";

export const DashboardContent = function () {
  const { data } = useSession();
  return (
    <div className="h-full w-full overflow-x-hidden px-4 py-2">
      <div className="max-w-full overflow-hidden">
        <CardGrid />
      </div>
      {data?.user?.email}
    </div>
  );
};
