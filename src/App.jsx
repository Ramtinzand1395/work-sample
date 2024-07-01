// components
import { useEffect } from "react";
import Detailse from "./components/detailse/Detailse";
import Header from "./components/Header";
import Services from "./components/our-services/Services";

import Price from "./components/Price/Price";
import Slider from "./components/slidere/Slider";
import { useChangetitle } from "./hooks/useTitle";
import CallIcon from "./components/element/CallIcon";

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
      <CallIcon />
    </div>
  );
};

export default App;
