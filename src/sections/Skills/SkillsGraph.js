import "./SkillsGraph.module.css";

import React, { useEffect, useRef, useState } from "react";

const SkillsGraph = (props) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
    console.log("height: ", ref.current.clientHeight);

    console.log("width: ", ref.current.clientWidth);
  }, []);
  const center = {
    x: Math.ceil(width / 20 / 2),
    y: Math.ceil(height / 20 / 2),
  };
  console.log("width: ", center);
  return (
    <>
      <div
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateRows: "repeat(auto-fill,20px)",
          gridTemplateColumns: "repeat(auto-fill,20px)",
        }}
      >
        {" "}
        <div
          style={{
            gridRowStart: center.y - 2,
            gridRowEnd: center.y + 2,
            gridColumnStart: center.x - 2,
            gridColumnEnd: center.x + 2,
            backgroundColor: "blue",
            zIndex: 20,
          }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png"></img>
        </div>
      </div>
    </>
  );
};

export default SkillsGraph;
