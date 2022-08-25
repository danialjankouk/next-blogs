import React, { useEffect } from "react";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import Layer from "components/Layer";
const HomePage = () => {
  const router = useRouter();
  const user = useAuth();
  useEffect(() => {
    if (!user) router.push("/signin");
  }, []);
  return (
    <>
      <Layer />
      <div className="flex justify-center items-center bg-slate-300 h-screen">
        <h1 className="text-3xl italic">welcome</h1>
      </div>
    </>
  );
};

export default HomePage;
