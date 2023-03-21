import React from "react";
import UseJsonFetch from "../hooks/UseJsonFetch";

export default function Loading() {
    const [data, loading, error] = UseJsonFetch('http://localhost:7070/loading');
    console.log('loading: ', loading)

  return (
    <div></div>
  )
}