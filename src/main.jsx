import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";

function App() {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);