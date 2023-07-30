import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-64px)]">
      <h1 className="text-8xl font-semibold">404</h1>
      <h2 className="text-3xl font-medium">Page not found</h2>
      <p className="text-xl font-medium">
        Sorry, we couldn't find what you were looking for.
      </p>
    </div>
  );
}

export default NotFoundPage;
