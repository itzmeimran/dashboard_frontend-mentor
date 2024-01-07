import React from "react";
import '../App.css'
const Card1 = ({
  bgColor,
  logo,
  name,
  count,
  staticIcon,
  statics,
  static_Color,
  type,
  cardBg,
  fColor,
  countColor,
  hoverColor,
}) => {
  return (
    <div
      className="cardParent"
      style={{
        width: "250px",
        height: "200px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        borderTop: "5px solid",
        borderTopColor: bgColor
          ? bgColor
          : "linear-gradient( #fdc468 ,#df4996 )", //not working
        backgroundColor: cardBg,
        cursor: "pointer",
        transition: "background-color 1s ease",
        margin: "1rem 0rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "space-around",
          height: "100%",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <img src={logo} alt="logo" />
          <h5 style={{ color: fColor }}>{name}</h5>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: countColor,
              transition: "color 1s ease",
            }}
          >
            {count}
          </h1>
          <p
            style={{
              letterSpacing: "1px",
              fontSize: "14px",
              marginTop: "0px",
              color: fColor,
              transition: "color 1s ease",
            }}
          >
            {type}
          </p>
        </div>
        <div style={{ color: static_Color }}>
          <h5 style={{ color: fColor, transition: "color 1s ease" }}>
            <img src={staticIcon} alt="staticIcon" /> {statics} Today
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card1;
