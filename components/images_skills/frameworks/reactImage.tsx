import React from "react";
import ContainerFramework from "./containerFrameworks";

function ReactImage() {
  return (
    <ContainerFramework link="https://reactjs.org">
      <div className="flex flex-row flex-wrap items-center justify-around w-[120px] h-[40.39px]">
        <div className="w-[30%] h-full">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-11.5 -10.23174 23 20.46348"
          >
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
        <p className="block w-[70%] text-center text-[1.5em] font-bold text-gray-700">
          React
        </p>
      </div>
    </ContainerFramework>
  );
}

export default ReactImage;
