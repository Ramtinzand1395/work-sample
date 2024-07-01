import React from "react";
import { workers } from "../../data/LocalData";

function Work() {
  return (
    <div className="mt-[6rem] max-w-[1300px] flex flex-col items-center mx-auto">
      <h1 className="text-center text-2xl">نمونه کارهای طراحی و کدنویسی شده</h1>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-8 mt-9">
        {workers.map((items) => (
          <div
            className="bg-[#D7DFEF] p-[25px] xl:w-[415px] lg:w-[340px] md:w-[500px] sm:w-[400px] w-[350px] shadow-lg shadow-gray-400 rounded-lg"
            key={items.id}
          >
            <a href={items.path} className="flex justify-center">
              <img
                className="w-[428px] h-[200px] rounded-lg hover:scale-105 duration-150 cursor-pointer"
                src={items.image}
                alt=""
              />
            </a>
            <p className="text-sm opacity-75 text-center mt-5">
              {items.detailse}
            </p>
            <a href={items.path}>
              <p className="text-sm text-center text-blue-600 mt-5">
                {items.path}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
