import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0b0b0f",
      color: "white",
      fontSize: "24px"
    }}>
      AZ Marketing — работает
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);