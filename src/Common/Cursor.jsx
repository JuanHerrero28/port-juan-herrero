import  { useState, useEffect } from "react";
import "./Cursor.css"; // Estilos CSS para el cursor

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      // Aplica un suavizado al movimiento del cursor
      setPosition(prevPosition => ({
        x: prevPosition.x + (e.clientX - prevPosition.x) / 2,
        y: prevPosition.y + (e.clientY - prevPosition.y) / 2
      }));
    };

    const hoverElement = () => {
      setHovered(true);
    };

    const unhoverElement = () => {
      setHovered(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", hoverElement);
      el.addEventListener("mouseleave", unhoverElement);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button").forEach((el) => {
        el.removeEventListener("mouseenter", hoverElement);
        el.removeEventListener("mouseleave", unhoverElement);
      });
    };
  }, []);

  // Aplica clases condicionales para cambiar el tamaño del cursor en estado de hover
  const cursorClasses = `cursor ${hovered ? "hovered" : ""}`;

  return (
    <div className={cursorClasses} style={{ left: position.x, top: position.y }}>
      {hovered && <span className="view-text">View</span>}
    </div>
  );
};

export default Cursor;



