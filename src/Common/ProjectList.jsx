import { motion } from "framer-motion";
import "./ProjectList.css"; // Importa los estilos CSS
import { Link } from "react-router-dom";

// Importa las imágenes individualmente
import dc1Image from "../image/dc-1.jpg";
import todo1Image from "../image/to-do-1.jpg";
import barong1Image from "../image/barong-1.jpg";
import eventosJuanImage from "../image/den-4.jpg";
import desingPort from "../image/ds-1.jpg";

const variants = {
  open: {
    y: 1,
    opacity: 1,
    transition: {
      y: { stiffness: 100, damping: 10 },
    },
  },
  closed: {
    y: 10,
    opacity: 0.5,
    transition: {
      y: { stiffness: 100, damping: 10 },
      opacity: { duration: 1 },
    },
  },
};

const getImage = (imageName) => {
  switch (imageName) {
    case "dc-1.jpg":
      return dc1Image;
    case "to-do-1.jpg":
      return todo1Image;
    case "barong-1.jpg":
      return barong1Image;
    case "den-4.jpg":
      return eventosJuanImage;
    case "ds-1.jpg":
      return desingPort;
    default:
      return null;
  }
};

const handleLinkClick = () => {
  window.scrollTo(0, 0); // Lleva al usuario al principio de la página
};

const MenuItem = ({ project }) => {
  const { id, name, image } = project;

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.5 }}
      className="menu-item"
    >
      <Link to={`/project/${id}`} className="link" onClick={handleLinkClick}>
        <div className="text-container">
          <h2 className="text-placeholder">{name}</h2>
          <img className="icon-placeholder" src={getImage(image)} alt={name} />
        </div>
      </Link>
    </motion.li>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list-container">
      <h2 className="title-project">
        Proyectos<span className="emoji-1">&#9749;</span>
      </h2>
      <ul className="project-list">
        {projects.map((project) => (
          <MenuItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
