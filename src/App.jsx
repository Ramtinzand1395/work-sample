// components
import { useEffect } from "react";
import Detailse from "./components/detailse/Detailse";
import Header from "./components/Header";
import Services from "./components/our-services/Services";

import Price from "./components/Price/Price";
import Slider from "./components/slidere/Slider";
import { useChangetitle } from "./hooks/useTitle";

const App = () => {
  useEffect(() => {
    useChangetitle("طراحی و کدنویسی اختصاصی سایت");
  }, []);

  return (
    <div>
      <Header />
      <Services />
      <Price />
      <Slider />
      <Detailse />
    </div>
  );
};

export default App;
