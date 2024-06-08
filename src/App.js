import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import SafetySection from "./components/SafetySection"; // Import the new component
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Form />
      <SafetySection /> {/* Include the new component */}
      <Footer />
    </div>
  );
}

export default App;
