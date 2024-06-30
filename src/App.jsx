import React from "react";
import Header from "./components/Header";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/our-services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
    </div>
  );
};

export default App;
