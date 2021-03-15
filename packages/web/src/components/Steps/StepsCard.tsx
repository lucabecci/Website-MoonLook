import React, { Fragment, useContext } from "react";
import Card from "./Card";
import ImageContext from "../../context/images/ImagesContext";

interface Props {
  first: string;
  second: string;
  third: string;
  four: string;
  selected: string;
}

const StepsCard = (props: Props) => {
  const imageContext = useContext(ImageContext);
  console.log(imageContext.images);
  return (
    <Fragment>
      {props.first === props.selected ? (
        <>
          <Card
            title="CONTACTO"
            description="Contactese con nosotros para coordinar una llamada."
            url={imageContext.images[0]}
          />
        </>
      ) : null}
      {props.second === props.selected ? (
        <>
          <Card
            title="SEÑA Y DESCRIPCION DEL PRODUCTO"
            description="Informenos sobre su producto a diseñar y señe la primer parte del mismo."
            url={imageContext.images[1]}
          />
        </>
      ) : null}
      {props.third === props.selected ? (
        <>
          <Card
            title="third"
            description="third desc"
            url={imageContext.images[2]}
          />
        </>
      ) : null}
      {props.four === props.selected ? (
        <>
          <Card
            title="four"
            description="four desc"
            url={imageContext.images[3]}
          />
        </>
      ) : null}
    </Fragment>
  );
};

export default StepsCard;
