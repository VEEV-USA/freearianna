import React, { Fragment } from "react";
import RecallHero from "./components/hero";
import RecallContent from "./components/action";
import { useLocation } from "react-router-dom";

export const RecallPage = () => {
  const location = useLocation();
  const person = location.state;
  console.log(person);
  return (
    <Fragment>
      <RecallHero person={person} />
      <RecallContent person={person} />
    </Fragment>
  );
};

export default RecallPage;
