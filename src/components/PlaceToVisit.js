import React from "react";
import useStyles from "../styles/useStyles";
import ImageCard from "./ImageCard";

import places from "../static/place";
import useWindowPosition from "../hook/useWindowPosition";
const PlaceToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.rootPlaceToVisit} id="place-to-visit">
      <ImageCard place={places[0]} checked={checked}/>
      <ImageCard place={places[1]} checked={checked}/>
    </div>
  );
};

export default PlaceToVisit;
