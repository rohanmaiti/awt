import React from "react";
import { ErrorBoundary } from "react-error-boundary";
export const Demo = () => {
  return (
    <div>
      <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
        <Card1 />
      </ErrorBoundary>
      <Card2 />
    </div>
  );
};

function Card1() {
  throw new Error("Error occurs");
  return <div>Hello Rohan</div>;
}

function Card2() {
  return <div>Hello Rahul</div>;
}
