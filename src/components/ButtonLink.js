import React from "react";
import "../styles/ButtonLink.css";

const ButtonLink = ({text, href, openNewTab="true" }) => {
  return (
    <a href={href} target={openNewTab === "true" ? "_blank" : ""} className="button-link" rel="noreferrer">
      {text}
    </a>
  );
};

export default ButtonLink;
