import React from "react";
import TitleSection from "../components/sections_Titles/contact";
import ButtonSendContact from "../components/button_send_contact";
import ItemContactInfoEmail from "../components/items_contact_info/item_contact_info_email";
import ItemContactInfoGithub from "../components/items_contact_info/item_contact_info_github";
import ItemContactInfoLinkedin from "../components/items_contact_info/item_contact_info_linkedin";
import TextFieldEmail from "../components/text_fields/textFieldEmail";
import TextFieldMessage from "../components/text_fields/textFieldMessage";
import TextFieldName from "../components/text_fields/textFieldName";

import styles from "../styles/contact_content.module.css";
import stylesHover from "../components/sections_Titles/contact/hoverText/hoverText.module.css";

import type { IMessageContact } from "../types/views/contactContent";
import Swal from "sweetalert2";

function ContactContent() {
  const [messageContact, setMessageContact] = React.useState<IMessageContact>({
    name: "",
    email: "",
    message: "",
  });

  function changeForm({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setMessageContact({ ...messageContact, [name]: value });
  }

  async function sendMessage() {
    if (
      messageContact.name.length < 3 ||
      messageContact.email.length < 5 ||
      messageContact.message.length < 5
    ) {
      Swal.fire("Debes llenar todos los campos del formulario", "", "error");
      return;
    }

    const respuesta: Response = await fetch(
      "https://api.davidsolis.dev/contact-me",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(messageContact),
      }
    );

    if (respuesta.status != 200) {
      Swal.fire("Ha ocurrido un error, intenta nuevamente", "", "error");
      return;
    }

    setMessageContact({
      name: "",
      email: "",
      message: "",
    });
    Swal.fire("Email enviado correctamente", "", "success");
  }

  return (
    <section
      className={`${styles.contact_content} ${stylesHover.hover_text_contact_container_section}`}
      id="contact"
    >
      <TitleSection />
      <section className={styles.container_contact} data-aos="zoom-in">
        <article className={styles.white_section}>
          <h2 className={styles.info_contact_title}>Información Personal</h2>
          <div className={styles.info_contact_content}>
            <div className={styles.separator_item_info_cotact}></div>
            <ItemContactInfoEmail />
            <div className={styles.separator_item_info_cotact}></div>
            <ItemContactInfoLinkedin />
            <div className={styles.separator_item_info_cotact}></div>
            <ItemContactInfoGithub />
          </div>
        </article>
        <article className={styles.fields_section}>
          <TextFieldName value={messageContact.name} onChange={changeForm} />
          <TextFieldEmail value={messageContact.email} onChange={changeForm} />
          <TextFieldMessage
            value={messageContact.message}
            onChange={changeForm}
          />
          <div className="w-full h-[20px]"></div>
          <ButtonSendContact onClick={sendMessage} />
        </article>
      </section>
    </section>
  );
}

export default ContactContent;
