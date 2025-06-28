"use client";
import { ErrorPageProps } from "@/types";
import { useRouter } from "next/navigation";
import LeftArrow from "./icons/LeftArrow";

const ErrorPage = ({
  title = "Something went wrong",
  message = "An unexpected error occurred.",
}: ErrorPageProps) => {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500 mb-6">{message}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="flex px-4 py-2 bg-black text-white text-sm rounded cursor-pointer"
          >
            <LeftArrow /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
