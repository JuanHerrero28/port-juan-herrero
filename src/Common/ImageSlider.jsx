// components/Common/ImageSlider.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  }, 
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};



const ImageSlider = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <CarouselContainer>
      <AnimatePresence initial={false} custom={direction}>
        <ImageContainer
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <StyledImage src={images[imageIndex]} alt={`Slide ${imageIndex}`} />
        </ImageContainer>
      </AnimatePresence>
      <Controls>
        <Arrow onClick={() => paginate(-1)}>
          <BsArrowLeft size={16} />
        </Arrow>
        <Arrow onClick={() => paginate(1)}>
          <BsArrowRight size={16} />
        </Arrow>
      </Controls>
    </CarouselContainer>
  );
};

export default ImageSlider;

// Estilos
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 750px;
  height: 380px;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 90%;
    height: 300px; /* ✅ Cambiá esta altura según necesites */
  }

  @media (max-width: 480px) {
    height: 220px; /* ✅ Más bajo para celulares más chicos */
  }
`;

const ImageContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 20px;
  z-index: 2;
`;

const Arrow = styled.button`
  background: white;
  border: none;
  border-radius: 70%;
  padding: 0.75rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;
