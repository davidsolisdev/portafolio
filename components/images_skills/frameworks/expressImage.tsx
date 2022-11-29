import React from "react";
import ContainerFramework from "./containerFrameworks";

function ExpressImage() {
  return (
    <ContainerFramework link="https://expressjs.com/es">
      <div
        style={{
          width: "120px",
          height: "40.39px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: "url(/expressjs.svg)",
        }}
      ></div>
    </ContainerFramework>
  );
}

export default ExpressImage;
