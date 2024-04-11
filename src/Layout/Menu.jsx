// Menu.js
import "./Menu.css";
import { motion } from "framer-motion";



export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };



  return (
    <>
      <div className="navBar">
      <NameComponent name="JUAN MANUEL HERRERO" />
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`menu-toggle ${menuOpened ? "open" : ""}`}
      >
        <div className="menu-bar bar1" />
        <div className="menu-bar bar2" />
        {/* <div className="menu-bar bar3" /> */}
      </motion.button>

      </div>


      <div className={`menu-content ${menuOpened ? "open" : ""}`}>
        <div className="menu-items">
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Proyectos" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contacto" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
};

const NameComponent = ({ name, onClick }) => {
  return (
    <div className="name-component">
      {name.split('').map((letter, index) => (
        <button key={index} className="name-letter-button" onClick={onClick}>
          <motion.div
            key={index}
            className="name-letter"
            transition={{ type: "spring", stiffness: 150 }}
            whileHover={{ rotate: 360 }}
          >
            {letter}
          </motion.div>
        </button>
      ))}
    </div>
  );
};

export default NameComponent;


const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <motion.button
      onClick={onClick}
      className="menu-button"
      transition={{ type: "linear", stiffness: 200 }}
      whileHover={{ x: 20 }}
    >
      {label}
    </motion.button>
  );
};
