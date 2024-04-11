import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaDatabase,
  FaCodeBranch,
  FaUserFriends,
  FaTools,
} from "react-icons/fa";
import "./SkillComponent.css";

const skillsData = [
  {
    icon: <FaReact />,
    title: "Desarrollo Frontend",
    description:
      "Experiencia sólida en el desarrollo de aplicaciones web frontend utilizando tecnologías como React, HTML, CSS y JavaScript.",
  },
  {
    icon: <FaHtml5 />,
    title: "Interfaz de Usuario (UI)",
    description:
      "Creación de interfaces de usuario intuitivas y atractivas que optimizan la experiencia del usuario y aumentan la retención.",
  },
  {
    icon: <FaCss3 />,
    title: "Experiencia de Usuario (UX)",
    description:
      "Aplicación de principios de UX para diseñar experiencias digitales que sean efectivas, eficientes y agradables de usar.",
  },
  {
    icon: <FaJs />,
    title: "Diseño Responsivo",
    description:
      "Desarrollo de sitios web y aplicaciones que se adaptan y funcionan correctamente en una variedad de dispositivos y tamaños de pantalla.",
  },
  {
    icon: <FaDatabase />,
    title: "Optimización de Rendimiento",
    description:
      "Identificación y solución de problemas de rendimiento para garantizar la velocidad y la eficiencia de las aplicaciones web.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Integración de API",
    description:
      "Conexión de aplicaciones web con servicios externos a través de API para acceder a datos y funcionalidades adicionales.",
  },
  {
    icon: <FaUserFriends />,
    title: "Colaboración en Equipo",
    description:
      "Trabajo efectivo en equipos multidisciplinarios, comunicación clara y colaboración para lograr objetivos comunes.",
  },
  {
    icon: <FaTools />,
    title: "Resolución de Problemas",
    description:
      "Habilidad para identificar y solucionar problemas de manera eficiente, garantizando el funcionamiento óptimo de las aplicaciones.",
  },
];

const SkillComponent = ({ skill }) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const elementTop = document.querySelector(".skills-grid").offsetTop;

      if (scrollY > elementTop - innerHeight / 1.5) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      className="skill-container"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="icon">
        <span className="icon-skill">{skill.icon}</span>
        <div>
        <h3 className="title-skill2">{skill.title}</h3>
        <p className="paragraph-skill">{skill.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsComponent = () => {
  return (
    <div className="skills-grid">
     <h2 className="title-skill">
        Skills<span className="emoji-1">&#9889;</span>
      </h2>
      {skillsData.map((skill, index) => (
        <SkillComponent key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsComponent;
