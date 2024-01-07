import facebook from "../assets/facebook.svg";
import up from "../assets/up.svg";
import down from "../assets/down.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

const gradientInsta =
  "linear-gradient( hsl(37, 97%, 70%) , hsl(329, 70%, 58%))";
export const Card1Data = [
  {
    symbol: facebook,
    name: "@nathanf",
    count: 1987,
    staticIcon: up,
    statics: 12,
    static_Color: "hsl(163, 72%, 41%)",
    bgColor: "hsl(208, 92%, 53%)",
    type: "FOLLOWERS",
  },
  {
    symbol: twitter,
    name: "@nathanf",
    count: 1044,
    staticIcon: up,
    statics: 99,
    static_Color: "hsl(163, 72%, 41%)",
    bgColor: "hsl(208, 92%, 53%)",
    type: "FOLLOWERS",
  },
  {
    symbol: instagram,
    name: "@realnathanf",
    count: "11k",
    staticIcon: up,
    statics: 1099,
    static_Color: "hsl(163, 72%, 41%)",
    bgColor: gradientInsta,
    type: "FOLLOWERS",
  },
  {
    symbol: youtube,
    name: "@nathanf",
    count: 8239,
    staticIcon: down,
    statics: 144,
    static_Color: "hsl(356, 69%, 56%)",
    bgColor: "hsl(348, 97%, 39%)",
    type: "SUBSCRIBERS",
  },
];
