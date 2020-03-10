import React from "react";
import "./Fruit.css";

export default function Fruit(props) { fetch('/api/fruits')
.then(response => response.json())
.then(data => console.log(data));
  return <div className={`fruit ${props.type}`}>{props.children}</div>;
}