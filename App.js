import { createElement } from "react";

import ReactDom from "react-dom/client";

const h1 = createElement("h1", {}, "THis is h1");

const h2 = createElement("h2", {}, "this is h2");

const h3 = createElement("h3", {}, "this is h3");

const div = createElement("div", {}, [h1, h2, h3]);

let container = document.getElementById("root");

let root = ReactDom.createRoot(container);

root.render(div);
