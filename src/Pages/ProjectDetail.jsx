import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loading from "../Common/Loading"; // Importa el componente Loading
import './ProjectDetail.css'
import Cursor from "../Common/Cursor"

import clinic2 from "../image/clinic-2.jpg";
import clinic3 from "../image/clinic-3.jpg";
import clinic4 from "../image/clinic-4.jpg";
import todo1 from "../image/to-do-1.jpg";
import todo2 from "../image/todo-2.jpg";
import todo3 from "../image/todo-3.jpg";
import ba1 from "../image/ba-1.jpg";
import ba2 from "../image/ba-2.jpg";
import ba3 from "../image/ba-3.jpg";
import den1 from "../image/den-1.jpg";
import den2 from "../image/den-2.jpg";
import den3 from "../image/den-3.jpg";
import ds1 from "../image/ds-1.jpg";
import ds2 from "../image/ds-2.jpg";
import ds3 from "../image/ds-3.jpg";
import ButtonComponent from "../Common/ButtonComponent";


const images = {
  "clinic-2": clinic2,
  "clinic-3": clinic3,
  "clinic-4": clinic4,
  "todo-1": todo1,
  "todo-2": todo2,
  "todo-3": todo3,
  "ba-1": ba1,
  "ba-2": ba2,
  "ba-3": ba3,
  "den-1": den1,
  "den-2": den2,
  "den-3": den3,
  "ds-1": ds1,
  "ds-2": ds2,
  "ds-3": ds3,
};

const ProjectDetail = ({ projects, onSectionChange }) => {
  const { id } = useParams(); // Obtener el parámetro id de la URL
  const projectId = parseInt(id, 10); // Convertir id a un número entero

  // Buscar el proyecto correspondiente en la lista de proyectos
  const project = projects.find((project) => project.id === projectId);

  // Estado para controlar si los detalles del proyecto están cargando
  const [isLoading, setIsLoading] = useState(true);
  const [nextProjectClicked, setNextProjectClicked] = useState(false);

  useEffect(() => {
    // Simula una carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    if (nextProjectClicked) {
      setIsLoading(true);
      setNextProjectClicked(false); // Restablece el estado de nextProjectClicked
    }// Simula un tiempo de carga de 3 segundos

    return () => clearTimeout(timer);
  }, [projectId, nextProjectClicked]);

  // Verificar si el proyecto existe
  if (!project) {
    return <div className="project-detail">Proyecto no encontrado</div>;
  }

  // Verificar si la propiedad images existe y es un array
  if (!project.images || !Array.isArray(project.images)) {
    return <div className="project-detail">No hay imágenes disponibles para este proyecto.</div>;
  }

  const handleNextProjectClick = () => {
    setIsLoading(true);
    window.scrollTo(0, 0);  // Al hacer clic, establece isLoading en true para mostrar el componente Loading
  };

 

  // Mostrar los detalles del proyecto o el componente Loading según el estado de carga
  return (
    <div className="project-detail">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Link to="/" onClick={() => onSectionChange(2)}  className="back-button"><ButtonComponent text="Volver al inicio"/></Link>
          {/* Botón para volver al inicio */}
          <h2 className="title-detail">{project.name}</h2>
          {/* Resto de tu código aquí */}
          <article className="container-detail">
            <div>
              <img
                className="image-detail"
                src={images[project.images[0]]}
                alt={project.name}
              />
            </div>
            <div className="cont-paragra">
              <p className="paragraph-detail">{project.description}</p>
            </div>
            <div className="cont-paragra">
              <p className="paragraph-detail">{project.description2}</p>
            </div>
            <img
              className="image-detail"
              src={images[project.images[1]]}
              alt={project.name}
            />
            <div>
              <img
                className="image-detail"
                src={images[project.images[2]]}
                alt={project.name}
              />
            </div>
            <div className="icons-detail">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaGithub /> Ver Proyecto
                </span>
              </a>
            </div>
          </article>
          <div className="navigation-buttons">
          {project.id !== 1 && (
            <Link to={`/project/${project.id - 1}`} className="next-button" onClick={handleNextProjectClick}>
              <ButtonComponent text={<>Proyecto Anterior</>} />
            </Link>
          )}
          {project.id !== 5 && (
            <Link to={`/project/${project.id + 1}`} className="next-button" onClick={handleNextProjectClick}>
              <ButtonComponent text={<>Siguiente Proyecto</>} />
            </Link>
          )}
          {/* Botón para ir al siguiente proyecto */}
          <Cursor/>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;



