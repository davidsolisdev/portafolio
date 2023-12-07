import React from "react";
import Head from "next/head";

interface IProps {
  title?: string;
  descripcion?: string;
  icon?: string;
}

function CustomHead(props: IProps) {
  const {
    title = "David Solis",
    descripcion = "",
    icon = "/favicon.png",
  } = props;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={descripcion} />
      <link rel="icon" href={icon} />
    </Head>
  );
}

export default CustomHead;
