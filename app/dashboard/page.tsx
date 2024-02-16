"use client";
import { Plan, User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { DashboardContent } from "../components/Dashboard/content";
import Loader from "../components/loader";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasDetectedPlan, setHasDetectedPlan] = useState<boolean>(false);
  const [user, setUser] = useState<User[]>([]);
  const router = useRouter();
  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth?login");
    },
  });

  useLayoutEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      if (status === "authenticated" && !isLoading) {
        console.log("Fetching user...");
        console.log(data.user?.email);

        try {
          const response = await axios.get(
            `/api/user?email=${data?.user?.email}`,
          );
          setUser([response.data]);
          if (user[0].plan) {
            setHasDetectedPlan(true);
            if (user[0].plan === Plan.Free) {
              router.push("/auth?payment");
            } else {
              setIsLoading(false);
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    !hasDetectedPlan && fetchUser();
    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.user?.email, router, status, user]);

  if (status === "loading" || isLoading) {
    return (
      <div className="h-full w-full">
        <Loader />
      </div>
    );
  }
  if (!isLoading && status === "authenticated") {
    return <DashboardContent />;
  }
}
