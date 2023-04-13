import React from "react";

const name = "Emiliano Gusberti";

function Footer() {
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
