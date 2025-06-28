"use client";

import ErrorPage from "@/components/ErrorPage";

const Error = ({ error }: { error: Error }) => {
  return (
    <ErrorPage
      title="Application Error"
      message={
        error?.message?.trim()
          ? error.message
          : "Something went wrong. Please try again later."
      }
    />
  );
};

export default Error;
