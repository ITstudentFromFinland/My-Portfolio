import React from "react";
import "./Fruit.css";

export default function Fruit(props) {
  return <div className={`fruit ${props.type}`}>{props.children}</div>;
}