import React from "reac"
import UseJsonFetch from "../hooks/UseJsonFetch";

export default function Error() {
    const [data, loading, error] = UseJsonFetch('http://localhost:7070/error');
    console.log('error: ', error);

  return (
    <div></div>
  )
}
