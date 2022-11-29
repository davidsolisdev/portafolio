import React from "react";
import styles from "./item_contact_info.module.css";

interface IPropsItemContactInfo {
  text: string;
  icon: JSX.Element;
  onClick?: () => void;
  className?: string;
}

function ItemContactInfo(props: IPropsItemContactInfo) {
  return (
    <div
      className={`${styles.item_container} ${props.className}`}
      onClick={props.onClick}
    >
      <div className={styles.item_icon}>{props.icon}</div>
      <div className={styles.item_text}>{props.text}</div>
    </div>
  );
}

export default ItemContactInfo;
