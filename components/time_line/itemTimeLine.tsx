import React from "react";
import styles from "./item_time_line.module.css";

interface IPropsItemTimeLine {
  title: string;
  fecha: string;
  children?: any;
}

function ItemTimeLine(props: IPropsItemTimeLine) {
  return (
    <li className={styles.container_item_time_line}>
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gray-900 bg-blue-900">
        <svg
          aria-hidden="true"
          className="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <h3 className={styles.title_item_time_line}>{props.title}</h3>
      <time className={styles.time_item_time_line}>{props.fecha}</time>
      <p className={styles.text_item_time_line}>{props.children}</p>
    </li>
  );
}

export default ItemTimeLine;
