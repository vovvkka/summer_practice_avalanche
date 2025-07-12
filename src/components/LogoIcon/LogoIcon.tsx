import React, { useState } from "react";
import bonch from "../../assets/images/bonch.png";
import bonchHover from "../../assets/images/bonch hover.png";
import GorniyeGuidi from "../../assets/images/Gorniye guidi.png";
import GorniyeGuidiHover from "../../assets/images/Gorniye guidi hover.png";
import Khibiny from "../../assets/images/Khibiny.png";
import KhibinyHover from "../../assets/images/Khibiny hover.png";
import lar from "../../assets/images/lar.png";
import larHover from "../../assets/images/lar hover.png";
import SA from "../../assets/images/SA.png";
import SAHover from "../../assets/images/SA hover.png";
import "./LogoIcon.css";

const logoMap: Record<string, { normal: string; hover: string }> = {
  bonch: { normal: bonch, hover: bonchHover },
  "Gorniye guidi": { normal: GorniyeGuidi, hover: GorniyeGuidiHover },
  Khibiny: { normal: Khibiny, hover: KhibinyHover },
  lar: { normal: lar, hover: larHover },
  SA: { normal: SA, hover: SAHover },
};

type LogoIconProps = {
  name: "bonch" | "Gorniye guidi" | "Khibiny" | "lar" | "SA";
  width?: number | string;
  height?: number | string;
  className?: string;
};

const LogoIcon: React.FC<LogoIconProps> = ({ name, width, height, className }) => {
  const [hovered, setHovered] = useState(false);
  const logo = logoMap[name];
  if (!logo) return null;

  return (
    <img
      src={hovered ? logo.hover : logo.normal}
      alt={name + " logo"}
      className={`logo-icon${className ? ` ${className}` : ""}`}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default LogoIcon;

