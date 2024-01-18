"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DashboardContent } from "../components/Dashboard/content";

export default function HomePage() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth?login");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <DashboardContent />;
}
