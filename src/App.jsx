// components
import { useEffect } from "react";
import Detailse from "./components/detailse/Detailse";
import Header from "./components/Header";
import Services from "./components/our-services/Services";

import Price from "./components/Price/Price";
import Slider from "./components/slidere/Slider";
import { useChangetitle } from "./hooks/useTitle";
import CallIcon from "./components/element/CallIcon";
import Work from "./components/Worksamples/Work";
import Buttonup from "./components/ButtonUp/Buttonup";

import "aos/dist/aos.css";
import AOS from "aos";
import BtnShow from "./components/btnShow/BtnShow";
import Prices from "./components/prices/Prices";

const App = () => {
  useEffect(() => {
    useChangetitle("طراحی و کدنویسی اختصاصی سایت");
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div data-aos="flip-left">
        <Header />
        <Services />
        <Price />
        <Slider />
        <Detailse />
        <Work />
        <BtnShow />
        <Prices />
      </div>

      <div>
        <CallIcon />
        <Buttonup />
      </div>
    </>
  );
};

export default App;
