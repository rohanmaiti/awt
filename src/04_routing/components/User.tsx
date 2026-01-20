import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  const params = useParams();
  return <h1>User with id {params?.id}</h1>;
};
