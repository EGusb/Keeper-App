import React from "react";

function Footer() {
  const name = "Emiliano Gusberti";
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Copyright ⓒ {currentYear} by {name}
      </p>
    </footer>
  );
}

export default Footer;
