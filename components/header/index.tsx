import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenDrawer } from "../../redux/globalInfo";

import LinkHeader from "./linkHeader";
import IconHeader from "./iconHeader";

import style from "../../styles/header.module.css";

import type { RootState } from "../../redux/store";

function Header() {
  const dispatch = useDispatch();
  const { openDrawer } = useSelector((state: RootState) => state.globalInfo);

  const header = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    let scroll: number = 0;
    window.addEventListener("scroll", function (this: Window, ev: Event) {
      if (this.scrollY > scroll) {
        header.current!.className = `${style.hidde_nav} ${style.header}`;
      } else {
        header.current!.className = `${style.visible_nav} ${style.header} ${
          this.scrollY > 5 ? style.shadow_nav : ""
        }`;
      }
      scroll = this.scrollY;
    });

    return () => {
      window.removeEventListener("scroll", function (this: Window, ev: Event) {
        if (this.scrollY > scroll) {
          header.current!.className = `header ${style.hidde_nav}`;
        } else {
          header.current!.className = `header ${style.visible_nav}`;
        }
        scroll = this.scrollY;
      });
    };
  }, []);

  return (
    <>
      <header className={style.header} ref={header}>
        <section className={style.header_content}>
          <div className={style.header_logo_container}>
            <div
              className="bg-contain bg-no-repeat w-[40%] h-full"
              style={{ backgroundImage: "url(/logo.png)" }}
            ></div>
          </div>

          <article className={style.header_option_container}>
            <LinkHeader href="#about" text="Sobre mi" />
            <LinkHeader href="#skills" text="Habilidades" />
            <LinkHeader href="#experience" text="Experiencia" />
            <LinkHeader href="#projects" text="Proyectos" />
            <LinkHeader href="#contact" text="Contacto" />
            <IconHeader
              urlIcon="/github.png"
              href="https://github.com/davidsolisdev"
            />
            <IconHeader
              urlIcon="/linkedin.png"
              href="https://linkedin.com/in/davidsolisdev"
            />
          </article>
          <article className={style.menu_mobile_icon}>
            {false && (
              <div
                className="w-[70%] h-[90%] bg-contain bg-no-repeat bg-center cursor-pointer"
                style={{ backgroundImage: "url(/menu.png)" }}
                onClick={() => dispatch(toggleOpenDrawer(!openDrawer))}
              ></div>
            )}
          </article>
        </section>
      </header>
    </>
  );
}

export default Header;
