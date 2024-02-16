"use client";

import React, { useEffect, useState } from "react";
import Loader from "./loader";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <Loader />;

  return <>{children}</>;
};

export default ClientOnly;
