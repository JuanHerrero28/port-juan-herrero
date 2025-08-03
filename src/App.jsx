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
/* import Cursor from "./Common/Cursor"; */

const projects = [
  {
    id: 9,
    name: "💸 Wallet virtual para gestión de dinero personal",
    image: "dig-1.jpg",
    images: ["dig-4", "dig-5", "dig-6", "dig-7", "dig-8"],
    description:
      "Digital Money es una billetera virtual desarrollada con tecnologías modernas como React, TypeScript y Styled Components, que permite a los usuarios gestionar de forma segura su dinero desde una interfaz intuitiva. La aplicación incluye funcionalidades clave como carga de dinero, gestión de tarjetas, visualización de actividad financiera en tiempo real y generación de comprobantes. El flujo de usuario está dividido en pasos, con validaciones dinámicas, navegación protegida y consumo de APIs reales mediante React Query y Jotai para el manejo global del estado. El sistema está conectado a un backend robusto desarrollado en Java, con endpoints protegidos mediante autenticación JWT.",
    description2:
      "Este proyecto fue desarrollado como entrega final de la especialización Frontend del programa Certified Tech Developer en Digital House, y representa una solución integral pensada para brindar al usuario autonomía financiera. Se priorizó una experiencia clara, accesible y mobile-first, con animaciones suaves y feedback visual inmediato. Desde el diseño de flujos transaccionales hasta la integración de componentes reutilizables, Digital Money demuestra un dominio práctico de arquitectura frontend escalable, enfoque UX/UI moderno y la capacidad para trabajar con APIs complejas en entornos productivos.",
    url: "https://digital-money-juan-manuel-herrero.vercel.app/",
  },
  {
    id: 6,
    name: " 🎪 Plataforma de reservas para juegos de feria",
    image: "fest-1.jpg",
    images: ["fest-1", "fest-3", "fest-4"],
    description:
      "FestivAll es una plataforma diseñada para la gestión integral de eventos y festivales, que utiliza una arquitectura moderna y eficiente. El frontend está desarrollado en React, empleando Fluent UI para una interfaz de usuario atractiva y Jotai para la gestión de estados. Además, utiliza Auth0 para la autenticación, garantizando la seguridad de los usuarios. La aplicación permite a los usuarios explorar eventos, realizar reservas y acceder a información de manera intuitiva y rápida. Para manejar las solicitudes y las operaciones del frontend, se ha implementado un backend robusto utilizando Java con Spring Boot, lo que facilita la creación y gestión de APIs RESTful",
    description2:
      "La base de datos de la aplicación está en MySQL, desplegada en Amazon RDS para asegurar la disponibilidad y seguridad de los datos. Esto permite un almacenamiento confiable y una recuperación eficiente de la información de reservas y eventos. El despliegue se realiza utilizando AWS y Railway, con Amazon EC2 manejando la infraestructura del servidor y Surge.sh hospedando el frontend. Herramientas como Postman y Thunder Client se utilizan para probar y documentar las APIs, garantizando interacciones fluidas entre el frontend y el backend. En conjunto, ProyectoFestivAll ofrece una solución completa y escalable para la gestión de festivales, desde la planificación de eventos hasta la interacción con los asistentes.",
    url: "https://festivall-juan-manuel-s-projects-aa10712c.vercel.app/",
  },
  {
    id: 10,
    name: "🚘 Explorador visual de modelos de autos",
    image: "sh-1.jpg",
    images: ["sh-1", "sh-2", "sh-3"],
    description:
      "Esta aplicación fue desarrollada como parte de un desafío técnico para el proceso de selección en Ego Design. Permite a los usuarios explorar modelos de autos de forma intuitiva, aplicando filtros por marca, año y tipo para refinar la búsqueda. La interfaz está diseñada con un enfoque limpio y responsivo, optimizada para brindar una experiencia fluida en cualquier dispositivo. Los datos son consumidos dinámicamente desde una API externa, utilizando Axios para las peticiones y React Router para la navegación entre vistas.",
    description2:
      "El proyecto demuestra la capacidad de construir una solución funcional y visualmente atractiva en un tiempo limitado, integrando buenas prácticas de desarrollo frontend. Se priorizó la usabilidad, el rendimiento y la organización del código, utilizando tecnologías como Vite, React y Styled Components. Este desafío no solo puso a prueba mis habilidades técnicas, sino también la forma en que encaro proyectos reales con foco en experiencia de usuario, modularidad y eficiencia en el consumo de datos.",
    url: "https://auto-showcase-one.vercel.app/",
  },
  {
    id: 7,
    name: "🛒 E-commerce con carrito de compras",
    image: "re-1.jpg",
    images: ["re-2", "re-3", "re-4"],
    description:
      "Este proyecto es una tienda en línea con carrito de compras, usando React, Redux y TypeScript. El estado global del carrito se maneja con useReducer y un cartReducer, permitiendo agregar, quitar o vaciar productos. Los datos de productos se gestionan con JSON Server, y la navegación entre páginas se maneja con react-router-dom. Además, react-query se usa para obtener productos desde un servidor simulado.",
    description2:
      "Es una aplicación de comercio electrónico que gestiona el carrito de compras con Redux y TypeScript. Utiliza cartReducer para actualizar el estado del carrito, y JSON Server simula un backend para los productos. Las rutas se gestionan con react-router-dom, y las consultas a la API se realizan con react-query",
    url: "https://renew-ynuj.vercel.app/",
  },
  {
    id: 1,
    name: "🦷 Plataforma clínica odontológica",
    image: "dc-1.jpg",
    images: ["clinic-2", "clinic-3", "clinic-4"],
    description:
      "Este proyecto tiene como objetivo principal implementar un sistema que permita gestionar eficientemente los datos de odontólogos, pacientes y las reservas de turnos. Se empleará una tecnología robusta y ampliamente utilizada en el desarrollo de aplicaciones empresariales: Java con el framework Spring Boot MVC. Esta elección se basa en la necesidad de garantizar la escalabilidad, seguridad y mantenibilidad del sistema a largo plazo.",
    description2:
      "El proyecto se desarrollará como parte del programa Certified Tech Developer impartido por Digital House, lo que garantiza un enfoque práctico y alineado con las demandas del mercado laboral en tecnología. Durante este período, se pondrá un énfasis particular en la implementación de Hibernate ORM para gestionar la capa de persistencia de datos, asegurando así una integración fluida entre la lógica de negocio y la base de datos. Además, se aplicarán las mejores prácticas de seguridad informática mediante el uso de Spring Security, con el fin de proteger la información sensible manejada por el sistema y garantizar la privacidad de los pacientes y el cumplimiento de regulaciones vigentes.",
    url: "https://github.com/JuanHerrero28/Dental-clinic",
  },
  {
    id: 2,
    name: "✅ Administrador de tareas",
    image: "to-do-1.jpg",
    images: ["todo-1", "todo-2", "todo-3"],
    description:
      "El proyecto incluye funciones en JavaScript para validar y manipular datos de un formulario de registro y un sistema de gestión de tareas. Validan nombres, apellidos, correos electrónicos y contraseñas, normalizan texto y email, comparan contraseñas y gestionan la sesión del usuario. Además, realizan peticiones HTTP para registrar usuarios, iniciar sesión, obtener información del usuario y administrar tareas.",
    description2:
      "El proyecto también incluye funciones adicionales para realizar acciones como cerrar sesión, obtener el nombre de usuario, consultar y crear tareas, cambiar el estado de una tarea y eliminar tareas. Estas funciones están integradas en un flujo de trabajo que utiliza eventos del navegador para cargar los datos y realizar acciones en la interfaz de usuario. Además, se incorpora el uso de la API Fetch para realizar solicitudes HTTP al servidor de la aplicación y el uso de la librería Swal para mostrar mensajes de confirmación al usuario. Además, se incluyen funciones para mostrar y ocultar un spinner de carga durante el procesamiento de las solicitudes.",
    url: "https://juanherrero28.github.io/To-Do-App/",
  },
  {
    id: 3,
    name: "🎨 Plataforma diseño y desarrollo",
    image: "barong-1.jpg",
    images: ["ba-1", "ba-2", "ba-3"],
    description:
      "Este proyecto combina diseño y desarrollo web. A través de una cuidadosa selección de colores, tipografías y disposición de elementos, logra crear una experiencia visualmente atractiva y coherente. La navegación fluida y la disposición intuitiva de la información facilitan la exploración del sitio, mientras que los efectos de animación sutiles añaden un toque de dinamismo que mejora la interacción del usuario.",
    description2:
      "Utiliza tecnologías modernas como HTML5, CSS3 y JavaScript para construir un sitio web responsivo y compatible con diferentes dispositivos y navegadores. La optimización del código y el uso de buenas prácticas de desarrollo garantizan un rendimiento óptimo y una experiencia de usuario fluida. El proyecto demuestra el equilibrio entre la estética visual y la funcionalidad técnica, lo que resulta en un sitio web que no solo cautiva visualmente, sino que también ofrece una experiencia de usuario satisfactoria y eficiente.",
    url: "https://juanherrero28.github.io/Barong-Juan-Manuel-Herrero/",
  },
  {
    id: 4,
    name: "⭐ Gestión de favoritos dentales",
    image: "den-4.jpg",
    images: ["den-1", "den-2", "den-3"],
    description:
      "DentistaFinder es una aplicación web desarrollada con React que permite a los usuarios explorar una lista de dentistas y agregar sus favoritos. La aplicación ofrece funcionalidades como la visualización detallada de cada dentista, contacto mediante un formulario y la capacidad de cambiar entre modos de luz y oscuridad. Utilizando un contexto global, la aplicación gestiona el estado de los temas y la lista de dentistas favoritos de manera eficiente.",
    description2:
      "Mediante el uso de componentes reutilizables y enrutamiento con React Router, DentistaFinder proporciona una experiencia fluida de usuario. Además, la aplicación utiliza localStorage para almacenar los dentistas favoritos del usuario de manera persistente, ofreciendo una experiencia personalizada. La interfaz de usuario se adapta dinámicamente según la preferencia de tema del usuario, asegurando una experiencia visual agradable y accesible.",
    url: "https://front3-final-nakayama-herrero.vercel.app/",
  },
  {
    id: 5,
    name: "🧑‍🎨 PortFolio Graphic Designer",
    image: "ds-1.jpg",
    images: ["ds-1", "ds-2", "ds-3"],
    description:
      "Este proyecto, hospedado en Vercel, representa el portfolio profesional para un Diseñador Grafico, desarrollado con un enfoque centrado en la experiencia del usuario (UX/UI). Utilicé un conjunto de tecnologías estándar de la web, incluyendo HTML5, CSS3 y JavaScript, con un enfoque en modularidad y escalabilidad. La arquitectura del sitio se fundamenta en un patrón de diseño MVC (Modelo-Vista-Controlador), y la lógica de presentación se gestiona eficientemente a través de un marco de trabajo frontend como React.js, lo que permite una interacción dinámica y una respuesta rápida del usuario.",
    description2:
      "En términos de ingeniería de software, el código subyacente refleja una arquitectura bien definida y modular, con un énfasis en la reutilización de componentes y la mantenibilidad a largo plazo. Cada aspecto del desarrollo se llevó a cabo con un riguroso control de calidad, garantizando la coherencia del diseño, la integridad de los datos y la seguridad del sistema. En última instancia, este proyecto ejemplifica mi competencia técnica en el desarrollo web moderno y mi compromiso con la excelencia en la entrega de soluciones digitales de alta calidad.",
    url: "https://port-felicitas-herrero.vercel.app/",
  },
  {
    id: 8,
    name: "💍 Plataforma de gestión de eventos",
    image: "in-1.jpg",
    images: ["in-2", "in-3", "in-4"],
    description:
      "Esta plataforma de gestión de eventos permite a los usuarios confirmar su asistencia a una boda, acceder a información sobre regalos y visualizar una cuenta regresiva para el evento. Con un diseño responsivo, cuenta con secciones como detalles de regalo, integración con Instagram para fotos y botones para agregar al calendario.",
    description2:
      "Sistema de Confirmación de Asistencia: En este sistema, los usuarios pueden confirmar su asistencia a un evento especial, ver detalles sobre regalos y disfrutar de un contador regresivo hasta la fecha del evento. La plataforma también incluye una integración con redes sociales y la opción de añadir el evento al calendario personal.",
    url: "https://invitation-wedding-eight.vercel.app/",
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
    } else if (newSection === 3 && contactRef.current) {
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
          <Footer handleSectionChange={handleSectionChange} />
        </div>
      </div>
      {/* <Cursor/> */}
    </Router>
  );
}

export default App;
