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
      </div>

      <CallIcon />
      <Buttonup />
    </>
  );
};

export default App;
