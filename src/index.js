import React from "react";
import ReactDom from "react-dom";

const Name = "Hisamuddin Shaikh";
const Year = new Date();
const curYear = Year.getFullYear();
ReactDom.render(
  <>
    <p>Created by {Name}</p>
    <p>Copywrite {curYear}</p>
  </>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
