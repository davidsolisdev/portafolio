import Link from "next/link";
import React from "react";
import { urlFront } from "../utils/url";

function ButtonOthersProjects() {
  return (
    <a
      className="w-full cursor-pointer sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 no-underline focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      data-aos="fade-right"
      onClick={() => {
        window.open(`${urlFront}/projects`, "_blank");
      }}
    >
      <div className="text-center">
        <div className="mb-1 text-xs">Revisa mis</div>
        <div className="-mt-1 font-sans text-sm font-semibold">
          Otros Proyectos
        </div>
      </div>
    </a>
  );
}

export default ButtonOthersProjects;
