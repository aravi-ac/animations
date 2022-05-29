import React from "react";
import Basic from "../components/Transition/Basic";
import Duration from "../components/Transition/Transition_duration";
import Property from "../components/Transition/Transition_property";
import TimingFunction from "../components/Transition/Transition_timing_function";
import TimingFunctionSteps from "../components/Transition/Transition_TF_steps";
import TimingFunctionCubic from "../components/Transition/Transition_TF_CubicBezier";
import Delay from "../components/Transition/Transition_delay";
import AllProperty from "../components/Transition/AllProperty";
import Multiple from "../components/Transition/MultipleProperty";
import Transitionable from "../components/Transition/TransitionableProperty";

const Transition = () => {
  return (
    <div>
      {/* <Basic /> */}
      {/* <Property /> */}
      {/* <Duration /> */}
      {/* <TimingFunction /> */}
      {/* <TimingFunctionSteps /> */}
      {/* <TimingFunctionCubic /> */}
      {/* <Delay /> */}
      {/* <AllProperty /> */}
      {/* <Multiple /> */}
      <Transitionable />
    </div>
  );
};

export default Transition;
