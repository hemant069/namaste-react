import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);
