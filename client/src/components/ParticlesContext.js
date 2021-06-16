import React, { createContext } from "react";
export const ParticlesContext = createContext();

export const ParticlesProvider = ({ children }) => {
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "10vh",
    zIndex: "1",
    // ???
  };
  const params = {
    fpsLimit: 60,
    backgroundMode: {
      enable: true,
      zIndex: 0,
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: "circle",
        options: {
          polygon: {
            sides: 5,
          },
          image: {
            src: "https://cdn.matteobruni.it/images/particles/github.svg",
            width: 100,
            height: 100,
          },
        },
      },
      stroke: {
        width: 0,
      },
      opacity: {
        value: 0.5,
        random: false,
        animation: {
          enable: false,
          speed: 3,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        animation: {
          enable: false,
          speed: 20,
          minimumValue: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },
    detectRetina: true,
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

  return (
    <ParticlesContext.Provider value={{ style, params }}>
      {children}
    </ParticlesContext.Provider>
  );
};
