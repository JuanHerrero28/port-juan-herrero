import "./BtnTop.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BtnTop = () => {
  const [visible, setVisible] = useState(false); // Inicialmente oculto

  const handleScroll = () => {
    // Verifica si el usuario se ha desplazado hacia abajo
    if (window.scrollY > 100) { 
      setVisible(true); // Muestra el botón si el usuario se ha desplazado hacia abajo más de 100 píxeles
    } else {
      setVisible(false); // Oculta el botón si el usuario está en la parte superior de la página
    }
  };

  useEffect(() => {
    // Verifica la visibilidad del botón al cargar la página
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      className={`btn-top ${visible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className="material-icons">keyboard_arrow_up</i>
    </motion.button>
  );
};

export default BtnTop;






