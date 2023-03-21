import React from "react"
import UseJsonFetch from "../hooks/UseJsonFetch";

export default function Success(props) {
    const [data, loading, error] = UseJsonFetch('http://localhost:7070/data');
    console.log('data: ', data)

  return (
    <div></div>
  )
}