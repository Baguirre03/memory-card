import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

async function hello() {
  try {
    const response = await fetch("https://api.attackontitanapi.com/titans", {
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    throw new Error(err);
  }
}
hello();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode></React.StrictMode>
);
