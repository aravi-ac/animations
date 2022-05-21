import React from "react";
import Rotate from "../components/Rotate";
import Scale from "../components/Scale";
import Skew from "../components/Skew";
import Transform from "../components/Transform";
import Transformable from "../components/Transformable";

export const Transforms = () => {
  return (
    <>
      <h1>Transforms : translate, scale, rotate, skew</h1>
      {/* <Transform /> */}
      {/* <Scale /> */}
      {/* <Rotate /> */}
      {/* <Skew /> */}
      <Transformable />
    </>
  );
};
