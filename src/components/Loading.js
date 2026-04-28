import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loaderWrapper">
      <div className="track">
        <div className="bar" />
      </div>
    </div>
  );
};

export default Loading;