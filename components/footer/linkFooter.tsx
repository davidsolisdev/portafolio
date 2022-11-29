import Link from "next/link";
import React from "react";

interface PropsLinkFooter {
  href: string;
  text: string;
}

function LinkFooter(props: PropsLinkFooter) {
  return (
    <section className="link-header-container">
      <Link href={props.href}>
        <a className="link-header">{props.text}</a>
      </Link>
    </section>
  );
}

export default LinkFooter;
