import { useState } from "react";
import { motion } from "framer-motion";
import "./Loading.css"; // Importar estilos CSS

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="loading-container">
      {isLoading && (
        <motion.div
          className="loading-circle"
          animate={{ rotate: 360 }} // Rotar el círculo 360 grados
          transition={{ duration: 1.5, loop: Infinity, ease: "linear" }} // Transición continua y lineal
          onAnimationComplete={() => setIsLoading(false)} // Una vez completada la animación, establece isLoading en falso
        />
      )}
    </div>
  );
};

export default Loading;



