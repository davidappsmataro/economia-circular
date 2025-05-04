/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from "bootstrap";
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const bots = bootstrap;
  /* const university = "UOC";
  console.log(`Hello, ${university}!`); */

  // Añadir la clase 'active' al enlace del navbar correspondiente a la ruta actual
  const currentPath = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active"); // Añade la clase 'active'
    } else {
      link.classList.remove("active"); // Quita la clase de otros enlaces
    }
  });
})();
