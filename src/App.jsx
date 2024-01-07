import React, { useEffect, useState } from "react";
import Card1 from "./components/Card1";
import { Card1Data } from "./components/Card1Data";
import Card2 from "./components/Card2";
import { Card2Data } from "./components/Card2Data";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const storedMode = localStorage.getItem("mode");
  const [mode, setMode] = useState(storedMode || "dark");
  const [isToggled, setToggled] = useState(false);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    setToggled(!isToggled);
  };

  return (
    <div
      className="topContainer"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor:
          mode === "light" ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)",
        minHeight: "100vh",
        maxHeight: "100%",
        transition: "background-color 0.5s ease",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          className="topbg"
          style={{
            width: "100%",
            display: "flex",
            backgroundColor:
              mode === "light" ? "hsl(225, 100%, 98%)" : "hsl(232, 19%, 15%)",
            justifyContent: "center",
            borderRadius: "10px",
            paddingTop: "3rem",
            marginBottom: "10rem",
            transition: "background-color 1s ease",
          }}
        >
          <section
            title="Dashboard"
            className="heading"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1240px",
              alignItems: "center",
              paddingBottom: "10rem",
              position: "relative",
              flexDirection: "column",
            }}
          >
            <div
              className="heading1"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div>
                <h1
                  style={{
                    marginBottom: "10px",
                    color: mode === "light" ? "black" : "hsl(0, 0%, 100%)",
                  }}
                >
                  Social Media Dashboard
                </h1>
                <h5
                  style={{
                    marginTop: "0px",
                    color: mode === "light" ? "black" : "hsl(0, 0%, 100%)",
                  }}
                >
                  Total Followers : 23,004
                </h5>
              </div>
              <div
                className="heading2"
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <h5
                  style={{
                    color: mode === "light" ? "black" : "hsl(0, 0%, 100%)",
                  }}
                >
                  {mode === "light" ? "Light Mode" : "Dark Mode"}
                </h5>
                <Button
                  btnc={mode === "light" ? "white" : "hsl(228, 28%, 20%)"}
                  toggleMode={toggleMode}
                  isToggled={isToggled}
                />
              </div>
            </div>
            <section
              title="Overview"
              className="overview"
              style={{
                maxWidth: "1240px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                position: "absolute",
                top: "7rem",
                fontSize: "14px",
              }}
            >
              {Card1Data.map((item, index) => (
                <Card1
                  key={index}
                  logo={item.symbol}
                  name={item.name}
                  count={item.count}
                  staticIcon={item.staticIcon}
                  statics={item.statics}
                  static_Color={item.static_Color}
                  bgColor={item.bgColor}
                  type={item.type}
                  cardBg={
                    mode === "light"
                      ? "hsl(227, 47%, 96%)"
                      : "hsl(228, 28%, 20%)"
                  }
                  fColor={
                    mode === "light"
                      ? "hsl(228, 12%, 44%)"
                      : "hsl(228, 12%, 44%)"
                  }
                  countColor={mode === "light" ? "black" : "hsl(0, 0%, 100%)"}
                  hoverColor={mode === "light" ? "white" : "white"} //not working
                />
              ))}
            </section>
          </section>
        </div>
      </div>
      <section
        style={{ width: "100%", maxWidth: "1240px" }}
        className="section2"
      >
        <h1
          style={{
            color: mode === "light" ? "hsl(228, 12%, 44%)" : "hsl(0, 0%, 100%)",
            textAlign: "left",
          }}
        >
          Overview - Today
        </h1>
        <div
          className="card2Container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {Card2Data.map((item, index) => (
            <Card2
              key={index}
              name={item.name}
              symbol={item.symbol}
              count={item.count}
              statics={item.static}
              static_Icon={item.staticSymbol}
              cardBg={
                mode === "light" ? "hsl(227, 47%, 96%)" : "hsl(228, 28%, 20%)"
              }
              static_Color={item.static_Color}
              countColor={mode === "light" ? "black" : "hsl(0, 0%, 100%)"}
              headingColor={
                mode === "light" ? "hsl(228, 12%, 44%)" : "hsl(228, 12%, 44%)"
              }
            />
          ))}
        </div>
      </section>
      <footer style={{ margin: "3rem 0rem" }}>
        <p
          className="copyright"
          style={{
            color:
              mode === "light" ? "hsl(228, 12%, 44%)" : "hsl(228, 12%, 44%)",
            fontSize: "14px",
          }}
        >
          Challenge by Frontend Mentor | completed by Mohammad Imran Khan
        </p>
      </footer>
    </div>
  );
};

export default App;
