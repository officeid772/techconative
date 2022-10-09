import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Loader(props) {
  return (
    <div
      className="LoadingScreen"
      style={{
        display: `${props.loading ? "flex" : "none"}`,
      }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
