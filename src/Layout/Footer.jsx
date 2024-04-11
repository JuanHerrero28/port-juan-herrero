import NameComponent from "./Menu";
import "./Footer.css"; // Archivo CSS donde añadirás tus estilos

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="paragraphs-1">
        <p className="parrafo-1-1">
          Ahora es el momento de empezar a crear algo increíble juntos
        </p>
      </div>
      <div className="paragraphs">
        <p className="parrafo-2">[PONERSE EN CONTACTO]</p>
      </div>
      <ul className="footer-list">
        <li>
          <a href="https://www.linkedin.com/in/juan-manuel-herrero-b2a043191/" target="_blank"><NameComponent name="linkedin"/></a>
        </li>
        <li>
          <a href="mailto:juanmanuelherrero281991@gmail.com" target="_blank"><NameComponent name="mail"/></a>
        </li>
        <li>
          <a href="https://github.com/JuanHerrero28" target="_blank"><NameComponent name="github" /></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;