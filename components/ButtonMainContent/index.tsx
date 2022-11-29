import React from "react";
import styles from "./button.module.css";

interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: any;
}

function ButtonMainContent(props: IPropsButton) {
  return (
    <>
      <button
        className={`${styles.c_button} ${styles.c_button__gooey}`}
        onClick={() =>
          window.open("https://github.com/davidsolisdev", "_blank")
        }
      >
        {props.children}
        <div className={`${styles.c_button__blobs}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <svg
        style={{ display: "block", height: 0, width: 0 }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              result="blur"
              stdDeviation="10"
              in="SourceGraphic"
            ></feGaussianBlur>
            <feColorMatrix
              result="goo"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              mode="matrix"
              in="blur"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default ButtonMainContent;
