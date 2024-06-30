import { TbBrandTelegram } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { useState } from "react";

function SochialMedia() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-0 top-[22rem] bg-white w-[50px] border-[1px] border-gray-300 rounded-lg h-[200px]">
      <div className={` flex justify-end bg-blue-300`}>
        <TbBrandTelegram size={22} color="blue" />
      </div>

      <div className="flex justify-end">2</div>
      <div className="flex justify-end">3</div>
      <div className="flex justify-end">4</div>
    </div>
  );
}

export default SochialMedia;
