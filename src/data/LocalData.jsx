// images
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.webp";

// image workers
import tarkhineh from "../assets/worker/tarkhineh.png";
import mamanpaz from "../assets/worker/mamanpaz.png";
import delino from "../assets/worker/delino.png";
import panel from "../assets/worker/panel.png";
import sorena from "../assets/worker/sorena.png";
import rojan from "../assets/worker/rojan.png";

// icon
import { IoStarOutline } from "react-icons/io5";

export const dataSlider = [
  { id: 1, slider1: image1, detailse: "https://react.dev/" },
  { id: 2, slider1: image2, detailse: "https://html.com/" },
  { id: 3, slider1: image3, detailse: "https://nodejs.org/en" },
  {
    id: 4,
    slider1: image4,
    detailse:
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
  },
  { id: 5, slider1: image5, detailse: "https://nextjs.org/" },
  { id: 6, slider1: image6, detailse: "https://www.typescriptlang.org/" },
  { id: 7, slider1: image7, detailse: "https://tailwindcss.com/" },
];

export const startLocal = [
  { id: 1, start: <IoStarOutline size={20} /> },
  { id: 2, start: <IoStarOutline size={20} /> },
  { id: 3, start: <IoStarOutline size={20} /> },
  { id: 4, start: <IoStarOutline size={20} /> },
  { id: 5, start: <IoStarOutline size={20} /> },
];

export const workers = [
  {
    id: 1,
    image: tarkhineh,
    path: "https://tarkhineh-app.liara.run/home",
    detailse: "نمونه کار طراحی سایت ثبت و سفارش غذای ترخینه",
  },
  {
    id: 2,
    image: mamanpaz,
    path: "https://mamanpaz.ir/",
    detailse: "نمونه کار طراحی سایت سفارش غذای مامان پز",
  },
  {
    id: 3,
    image: delino,
    path: "https://www.danielleeiran.com/",
    detailse: "نمونه کار طراحی سایت کیف و کفش زنانه",
  },
  {
    id: 4,
    image: sorena,
    path: "https://surenacs.com/",
    detailse: "نمونه کار طراحی سایت فروشگاهی",
  },
  {
    id: 5,
    image: panel,
    path: "https://admin-panel-seven-beta.vercel.app/",
    detailse: "قالب طراحی شده پنل ادمین",
  },
  {
    id: 6,
    image: rojan,
    path: "https://rojashop.com/",
    detailse: "سایت فروش لوازم آرایشی",
  },
];
