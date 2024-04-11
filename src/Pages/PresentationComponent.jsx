import ButtonComponent from "../Common/ButtonComponent";
import "./PresentationComponent.css";
import juanPortImage from "../image/juan-port.jpg";
import cv from "../image/CV-Juan-Manuel-Herrero.pdf" // Importa la imagen directamente

const PresentationComponent = () => {
  const dataArray = [
    {
      title: "..Quién soy ?",
      parrafo: "¡Hola! \u{1F44B} Soy Juan Manuel, desarrollador Frontend especializado en React, JavaScript y Java. Me dedico a la creación de interfaces interactivas y dinámicas, optimizando la experiencia del usuario y aplicando los principios de UI/UX. Como objetivo, me propongo implementar mejoras en la interfaz y optimizar procesos a través del frontend para ofrecer una experiencia de usuario dinámica.",

      img: juanPortImage, // Utiliza la imagen importada
    },
  ];

  const data = dataArray[0];

  return (
    <>
      <div className="presentation" id="presentationComponent">
        <div>
        <h1 className="title-1">{data.title}</h1>
        <p className="parrafo-1">{data.parrafo}</p>
        <a className="cv" href={cv} download target="_blank">
          <ButtonComponent text="Hoja de vida"/>
        </a>
        </div>
        <img className="img-juan" src={data.img} alt="Juan Port"></img> {/* Añade el atributo alt */}
      </div>
    </>
  );
};

export default PresentationComponent;

