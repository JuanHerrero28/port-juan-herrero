import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./Layout/Menu";
import { useEffect, useState, useRef } from "react";
import "./index.css";
import BtnTop from "./Common/BtnTop";
import PresentationComponent from "./Pages/PresentationComponent";
import ProjectList from "./Common/ProjectList";
import ProjectDetail from "./Pages/ProjectDetail";
import SkillsComponent from "./Common/SkillComponent";
import Footer from "./Layout/Footer";
import Cursor from "./Common/Cursor";

const projects = [
  {
    id: 1,
    name: "Dental Clinic",
    image: "dc-1.jpg",
    images: ["clinic-2", "clinic-3", "clinic-4"],
    description: "En el período comprendido entre octubre de 2023 y diciembre de 2023, se llevará a cabo el desarrollo del sistema de gestión para una clínica dental, bajo el nombre de Dental Clinic System. Este proyecto tiene como objetivo principal implementar un sistema que permita gestionar eficientemente los datos de odontólogos, pacientes y las reservas de turnos. Se empleará una tecnología robusta y ampliamente utilizada en el desarrollo de aplicaciones empresariales: Java con el framework Spring Boot MVC. Esta elección se basa en la necesidad de garantizar la escalabilidad, seguridad y mantenibilidad del sistema a largo plazo.",
    description2: "El proyecto se desarrollará como parte del programa Certified Tech Developer impartido por Digital House, lo que garantiza un enfoque práctico y alineado con las demandas del mercado laboral en tecnología. Durante este período, se pondrá un énfasis particular en la implementación de Hibernate ORM para gestionar la capa de persistencia de datos, asegurando así una integración fluida entre la lógica de negocio y la base de datos. Además, se aplicarán las mejores prácticas de seguridad informática mediante el uso de Spring Security, con el fin de proteger la información sensible manejada por el sistema y garantizar la privacidad de los pacientes y el cumplimiento de regulaciones vigentes.",
    url: "https://github.com/JuanHerrero28/Dental-clinic",
  },
  {
    id: 2,
    name: "To Do App",
    image: "to-do-1.jpg",
    images: ["todo-1", "todo-2", "todo-3"],
    description: "El proyecto incluye funciones en JavaScript para validar y manipular datos de un formulario de registro y un sistema de gestión de tareas. Validan nombres, apellidos, correos electrónicos y contraseñas, normalizan texto y email, comparan contraseñas y gestionan la sesión del usuario. Además, realizan peticiones HTTP para registrar usuarios, iniciar sesión, obtener información del usuario y administrar tareas.",
    description2: "El proyecto también incluye funciones adicionales para realizar acciones como cerrar sesión, obtener el nombre de usuario, consultar y crear tareas, cambiar el estado de una tarea y eliminar tareas. Estas funciones están integradas en un flujo de trabajo que utiliza eventos del navegador para cargar los datos y realizar acciones en la interfaz de usuario. Además, se incorpora el uso de la API Fetch para realizar solicitudes HTTP al servidor de la aplicación y el uso de la librería Swal para mostrar mensajes de confirmación al usuario. Además, se incluyen funciones para mostrar y ocultar un spinner de carga durante el procesamiento de las solicitudes.",
    url: "https://juanherrero28.github.io/To-Do-App/",
  },
  {
    id: 3,
    name: "Barong",
    image: "barong-1.jpg",
    images: ["ba-1", "ba-2", "ba-3"],
    description: "Este proyecto combina diseño y desarrollo web. A través de una cuidadosa selección de colores, tipografías y disposición de elementos, logra crear una experiencia visualmente atractiva y coherente. La navegación fluida y la disposición intuitiva de la información facilitan la exploración del sitio, mientras que los efectos de animación sutiles añaden un toque de dinamismo que mejora la interacción del usuario.",
    description2: "Utiliza tecnologías modernas como HTML5, CSS3 y JavaScript para construir un sitio web responsivo y compatible con diferentes dispositivos y navegadores. La optimización del código y el uso de buenas prácticas de desarrollo garantizan un rendimiento óptimo y una experiencia de usuario fluida. El proyecto demuestra el equilibrio entre la estética visual y la funcionalidad técnica, lo que resulta en un sitio web que no solo cautiva visualmente, sino que también ofrece una experiencia de usuario satisfactoria y eficiente.",
    url: "https://juanherrero28.github.io/Barong-Juan-Manuel-Herrero/",
  },
  {
    id: 4,
    name: "Dentista Finder",
    image: "den-4.jpg",
    images: ["den-1", "den-2", "den-3"],
    description: "DentistaFinder es una aplicación web desarrollada con React que permite a los usuarios explorar una lista de dentistas y agregar sus favoritos. La aplicación ofrece funcionalidades como la visualización detallada de cada dentista, contacto mediante un formulario y la capacidad de cambiar entre modos de luz y oscuridad. Utilizando un contexto global, la aplicación gestiona el estado de los temas y la lista de dentistas favoritos de manera eficiente.",
    description2: "Mediante el uso de componentes reutilizables y enrutamiento con React Router, DentistaFinder proporciona una experiencia fluida de usuario. Además, la aplicación utiliza localStorage para almacenar los dentistas favoritos del usuario de manera persistente, ofreciendo una experiencia personalizada. La interfaz de usuario se adapta dinámicamente según la preferencia de tema del usuario, asegurando una experiencia visual agradable y accesible.",
    url: "https://front3-final-nakayama-herrero.vercel.app/",
  },
  {
    id: 5,
    name: "PortFolio Graphic Designer",
    image: "ds-1.jpg",
    images: ["ds-1", "ds-2", "ds-3"],
    description: "Este proyecto, hospedado en Vercel, representa el portfolio profesional para un Diseñador Grafico, desarrollado con un enfoque centrado en la experiencia del usuario (UX/UI). Utilicé un conjunto de tecnologías estándar de la web, incluyendo HTML5, CSS3 y JavaScript, con un enfoque en modularidad y escalabilidad. La arquitectura del sitio se fundamenta en un patrón de diseño MVC (Modelo-Vista-Controlador), y la lógica de presentación se gestiona eficientemente a través de un marco de trabajo frontend como React.js, lo que permite una interacción dinámica y una respuesta rápida del usuario.",
    description2: "En términos de ingeniería de software, el código subyacente refleja una arquitectura bien definida y modular, con un énfasis en la reutilización de componentes y la mantenibilidad a largo plazo. Cada aspecto del desarrollo se llevó a cabo con un riguroso control de calidad, garantizando la coherencia del diseño, la integridad de los datos y la seguridad del sistema. En última instancia, este proyecto ejemplifica mi competencia técnica en el desarrollo web moderno y mi compromiso con la excelencia en la entrega de soluciones digitales de alta calidad.",
    url: "https://port-felicitas-herrero.vercel.app/",
  },
];

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const projectListRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  const handleSectionChange = (newSection) => {
    setSection(newSection);
    if (newSection === 2 && projectListRef.current) {
      projectListRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (newSection === 1 && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" }); // Desplazar hacia SkillsComponent
    } else if (newSection === 3 &&  contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <Router>
      <Menu
        onSectionChange={handleSectionChange}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PresentationComponent />
                <div ref={skillsRef}>
                  <SkillsComponent handleSectionChange={handleSectionChange} />
                </div>
                <div id="project-list" ref={projectListRef}>
                  <ProjectList
                    projects={projects}
                    handleSectionChange={handleSectionChange}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/project/:id"
            element={<ProjectDetail projects={projects} />}
          />
        </Routes>
        <BtnTop />
      <div ref={contactRef}>
      <Footer handleSectionChange={handleSectionChange}/>
      </div>
      </div>
      <Cursor/>
    </Router>
  );
}

export default App;
