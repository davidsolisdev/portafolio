import React from "react";

interface IPropsChipTecnologie {
  text: string;
}

function ChipTecnologie(props: IPropsChipTecnologie) {
  return (
    <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
      {props.text}
    </span>
  );
}

export default ChipTecnologie;
