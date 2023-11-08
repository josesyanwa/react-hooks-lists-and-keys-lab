import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
      {index < links.length - 1 && " "} {/* Add a space if not the last link */}
    </nav>
  );
}

export default NavBar;
