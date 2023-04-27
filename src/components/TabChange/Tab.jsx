import React, { useRef, useState } from "react";
import "./Tab.scss";
export default function Tab({ TabInput, TabChange }) {
  const [Index, setIndex] = useState(0);
  const element = useRef(null);
  const ChangeTab = (val, index) => {
    TabChange(val);
    setIndex(index);
    if (Index === 0) {
      element.current.style.left = "50%";
      element.current.style.color = "white";
    } else {
      element.current.style.left = "0%";
      element.current.style.color = "white";
    }
  };
  return (
    <div className="TabContent">
      <div className="Tabitems">
        {TabInput?.map((val, index) => {
          return (
            <>
              <span
                key={index}
                className={`tab ${Index === index ? "active" : ""}`}
                onClick={() => ChangeTab(val, index)}
              >
                {val}
              </span>
            </>
          );
        })}
        <span className="backgorund" ref={element}></span>
      </div>
    </div>
  );
}
