import React from "react";
import style from "../../styles/header.module.css";

interface IPropsIconHeader {
  urlIcon: string;
  href: string;
}

function IconHeader(props: IPropsIconHeader) {
  return (
    <article
      className={style.icon_header}
      style={{ backgroundImage: `url(${props.urlIcon})` }}
      onClick={() => window.open(props.href, "_blank")}
    ></article>
  );
}

export default IconHeader;
