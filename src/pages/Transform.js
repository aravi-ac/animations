import React from "react";
import Rotate from "../components/Transform/Rotate";
import Scale from "../components/Transform/Scale";
import Skew from "../components/Transform/Skew";
import Transform from "../components/Transform/Transform";
import Transformable from "../components/Transform/Transformable";
import TransformOrigin from "../components/Transform/TransformOrigin";
import MultipleTransform from "../components/Transform/MultipleTransform";

export const Transforms = () => {
  return (
    <>
      <h1>Transforms : translate, scale, rotate, skew</h1>
      {/* <Transform /> */}
      {/* <Scale /> */}
      {/* <Rotate /> */}
      {/* <Skew /> */}
      {/* <Transformable /> */}
      {/* <TransformOrigin /> */}
      <MultipleTransform />
    </>
  );
};
