import React from "react";
import style from "./hoverText.module.css";

interface IPropsHoverText {
  text: string;
}

function HoverText(props: IPropsHoverText) {
  return (
    <button data-text="Awesome" className={`${style.hover_text_button}`}>
      <span className={`${style.actual_text}`}>&nbsp;{props.text}&nbsp;</span>
      <span className={`${style.hover_text}`} aria-hidden="true">
        &nbsp;{props.text}&nbsp;
      </span>
    </button>
  );
}

export default HoverText;
