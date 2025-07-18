// components/ParticlesBackground.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { Engine, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#010d26",
      },
    },
    fullScreen: {
      enable: false,
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: false,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.5,
          },
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#010d26",
      },
      links: {
        color: "#c4e5f2",
        distance: 100,
        enable: true,
        opacity: 0.3,
        width: 0.5,
      },
      move: {
        enable: true,
        direction: MoveDirection.none,
        outModes: {
          default: OutMode.bounce,
        },
        speed: 0.5,
        random: false,
        straight: false,
      },
      number: {
        value: 500,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  return engineReady ? (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={options}
    />
  ) : null;
};

export default ParticlesBackground;
