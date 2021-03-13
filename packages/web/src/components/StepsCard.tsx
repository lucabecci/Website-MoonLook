import React, { Fragment } from "react";
import Card from "./Card";

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
          <Card title="first" description="first desc" url="" />
        </>
      ) : null}
      {props.second === props.selected ? (
        <>
          <Card title="second" description="second desc" url="" />
        </>
      ) : null}
      {props.third === props.selected ? (
        <>
          <Card title="third" description="third desc" url="" />
        </>
      ) : null}
      {props.four === props.selected ? (
        <>
          <Card title="four" description="four desc" url="" />
        </>
      ) : null}
    </Fragment>
  );
};

export default StepsCard;
