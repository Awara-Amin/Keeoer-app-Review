import React from "react";

const currentYear = new Date();
let year = currentYear.getFullYear();

function Footer() {
  return (
    <footer>
      <p> copy write {year}</p>
    </footer>
  );
}
export default Footer;
