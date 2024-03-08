import { createElement } from "react";

import ReactDom from "react-dom/client";
// using the createElement
const h1 = createElement("h1", {}, "THis is h1");

const h2 = createElement("h2", {}, "this is h2");

const h3 = createElement("h3", {}, "this is h3");

const div = createElement("div", {}, [h1, h2, h3]);

// using jsx

const heading1 = <h1>This is heading h1</h1>;
const heading2 = <h2>This is heading h2</h2>;
const heading3 = <h3>This is heading h3</h3>;

const JsxDiv = (
  <div>
    {heading1}
    {heading2}
    {heading3}
  </div>
);

// using functional component {For the naming convencel we write functional component in PascalCase }

const HeadingFun = function () {
  return (
    <div>
      <h1 id="heading1">this is h1 in functional component</h1>
      <h2>this is h2 in functional component</h2>
      <h3>this is h3 in functional component</h3>
    </div>
  );
};

let container = document.getElementById("root");

let root = ReactDom.createRoot(container);

// To using createElement in render write root.render(div)
// To using Jsx in render write root.render(JsxDiv)
// To using functional Component in render write root.render(<HeadingFun/>)
root.render(<HeadingFun />);
