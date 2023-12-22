import Lottie from "lottie-react";
import React from "react";
import loadingAnimation from "../../../assets/loading.json";
import { LoadingAnimation } from "./style";

const Loading = () => {
  return (
    <LoadingAnimation>
      <Lottie animationData={loadingAnimation} />
    </LoadingAnimation>
  );
};

export default Loading;
