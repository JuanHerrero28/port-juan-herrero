import ButtonComponent from "../Common/ButtonComponent";
import { motion } from "framer-motion";
import { useState, useEffect   } from "react";
import "./PresentationComponent.css";
import juanPortImage from "../image/juanport.png";
import cv from "../image/juan-manuel-herrero.pdf"
import Cursor from "../Common/Cursor"


const PresentationComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const dataArray = [
    {
      title: "..Quién soy ?",
      parrafo: "¡Hola! \u{1F44B} Soy Juan Manuel, desarrollador Frontend especializado en React, JavaScript y Java. Me dedico a la creación de interfaces interactivas y dinámicas, optimizando la experiencia del usuario y aplicando los principios de UX/UI. Como objetivo, me propongo implementar mejoras en la interfaz y optimizar procesos a través del frontend para ofrecer una experiencia de usuario dinámica.",

      img: juanPortImage, // Utiliza la imagen importada
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.querySelector(".title-1");
      if (titleElement) {
        const bounding = titleElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (bounding.top >= 0 && bounding.bottom <= windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define las variantes de animación
  const titleVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }, // Estado visible con transición escalonada
  };

  // Define las variantes de animación para cada letra
  const letterVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial
    visible: { opacity: 1, y: 0 }, // Estado visible
  };

  const data = dataArray[0];

  return (
    <>
      <div className="presentation" id="presentationComponent">
        <div>
        {/* Usa motion.div para animar el título */}
        <motion.div
              className="title-1"
              variants={titleVariants} // Aplica las variantes de animación
              initial="hidden" // Estado inicial
              animate={isVisible ? "visible" : "hidden"}
            >
              {/* Mapea cada letra del título y aplica las variantes de animación */}
              {data.title.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
        <p className="parrafo-1">{data.parrafo}</p>
        <a className="cv" href={cv} download target="_blank">
          <ButtonComponent text="Hoja de vida"/>
        </a>
        </div>
        <img className="img-juan" src={data.img} alt="Juan Port"></img> {/* Añade el atributo alt */}
      </div>
      <Cursor/>
    </>
  );
};

export default PresentationComponent;

