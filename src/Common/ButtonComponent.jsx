import "./ButtonComponent.css"; // Archivo CSS para los estilos del botón
import { motion } from "framer-motion";

const ButtonComponent = ({ text }) => {
  return (
    <motion.button
      whileTap={{ scale: 1.6 }}
      className="material-button"
    >
      <span>{text}</span>
    </motion.button>
  );
};

export default ButtonComponent;
