/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from "bootstrap";
import L from "leaflet";
//import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import markerIcon from "../images/marcador.png";
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const bots = bootstrap;

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
  //mapa de contacto - Leaflet
  //https://leafletjs.com/download.html

  //https://leafletjs.com/examples/custom-icons/
  const customIcon = L.icon({
    iconUrl: markerIcon, // Ruta al icono del marcador
    shadowUrl: markerShadow, // Ruta a la sombra del marcador
    iconSize: [55, 55], // Tamaño del icono
    iconAnchor: [12, 41], // Punto del icono que se posiciona en el mapa
    popupAnchor: [1, -34], // Punto desde el cual se abre el popup
    shadowSize: [41, 41], // Tamaño de la sombra
  });

  const map = L.map("map").setView([41.54396363436662, 2.4422959973222857], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  L.marker([41.54396363436662, 2.4422959973222857], { icon: customIcon })
    .addTo(map)
    .bindPopup("Jornadas de Economía Circular")
    .openPopup();
})();
