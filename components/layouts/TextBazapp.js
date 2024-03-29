import Script from "next/script";
import { useEffect } from "react";
import styled from "@emotion/styled";

const LogoText = styled.img`
  width: 100px;
`;

const TextBazapp = () => {
  useEffect(() => {}, []);
  return (
    <>
      <h1 className="ml8 text-center">
        <span className="letters-container">
          <span className="letters letters-left">B</span>
          <span className="letters bang">
            <LogoText src="/ganchos_2.png" alt="ganchos" />
          </span>
        </span>
        <span className="circle circle-white"></span>
        <span className="circle circle-dark"></span>
        <span className="circle circle-container">
          <span className="circle circle-dark-dashed"></span>
        </span>
      </h1>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"
        onLoad={() => {
          anime
            .timeline({ loop: true })
            .add({
              targets: ".ml8 .circle-white",
              scale: [0, 3],
              opacity: [1, 0],
              easing: "easeInOutExpo",
              rotateZ: 360,
              duration: 1100,
            })
            .add({
              targets: ".ml8 .circle-container",
              //scale: [0, 1],
              duration: 1100,
              easing: "easeInOutExpo",
              offset: "-=1000",
            })
            .add({
              targets: ".ml8 .circle-dark",
              scale: [0, 1],
              duration: 1100,
              easing: "easeOutExpo",
              offset: "-=600",
            })
            .add({
              targets: ".ml8 .letters-left",
              scale: [0, 1],
              duration: 1200,
              offset: "-=550",
            })
            .add({
              targets: ".ml8 .bang",
              scale: [0, 1],
              rotateZ: [45, 15],
              duration: 1200,
              offset: "-=1000",
            })
            .add({
              targets: ".ml8",
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1400,
            });

          anime({
            targets: ".ml8 .circle-dark-dashed",
            rotateZ: 360,
            duration: 8000,
            easing: "linear",
            loop: true,
          });
        }}
      />
    </>
  );
};

export default TextBazapp;
