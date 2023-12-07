import React from "react";
import Link from "next/link";

interface PropsLinkHeader {
  href: string;
  text: string;
}

function LinkHeader(props: PropsLinkHeader) {
  return (
    <section className="link-header-container">
      <Link href={props.href}>
        <a className="link-header">{props.text}</a>
      </Link>
      <div className="border-link-header"></div>
    </section>
  );
}

export default LinkHeader;
