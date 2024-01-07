import React from "react";
import '../App.css'
const Card2 = ({
  name,
  symbol,
  count,
  statics,
  static_Color,
  static_Icon,
  cardBg,
  countColor,
  headingColor,
}) => {
  return (
    <div
      className='cardParent'
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
        maxWidth: "230px",
        marginTop: "1rem",
        padding: "1rem 1.2rem",
        borderRadius: "10px",
        backgroundColor: cardBg,
        cursor: "pointer",
        transition: "background-color 1s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 style={{ color: headingColor, transition: "color 1s ease" }}>
          {name}
        </h4>
        <img src={symbol} alt="sym" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: countColor, transition: "color 1s ease" }}>
          {count}
        </h2>
        <div style={{ color: static_Color, transition: "color 1s ease" }}>
          <img src={static_Icon} alt="icon" />{" "}
          <span
            style={{
              fontSize: "14px",
              color: static_Color,
              transition: "color 1s ease",
            }}
          >
            {statics}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
