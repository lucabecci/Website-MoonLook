import React, { Fragment } from "react";
import Card from "./Card";
import firstGif from '../assets/gifs/Step1.gif'
import secondGif from '../assets/gifs/Step2.gif'
import thirdGif from '../assets/gifs/Step3.gif'
import fourGif from '../assets/gifs/Step4.gif'

interface Props {
  first: string;
  second: string;
  third: string;
  four: string;
  selected: string;
}

const StepsCard = (props: Props) => {
  return (
    <Fragment>
      {props.first === props.selected ? (
        <>
          <Card title="first" description="first desc" url={firstGif}/>
        </>
      ) : null}
      {props.second === props.selected ? (
        <>
          <Card title="second" description="second desc" url={secondGif} />
        </>
      ) : null}
      {props.third === props.selected ? (
        <>
          <Card title="third" description="third desc" url={thirdGif} />
        </>
      ) : null}
      {props.four === props.selected ? (
        <>
          <Card title="four" description="four desc" url={fourGif} />
        </>
      ) : null}
    </Fragment>
  );
};

export default StepsCard;
