"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";

export function Background({ children }: PropsWithChildren) {
  const [bounds, setBounds] = useState({
    minX: -150,
    minY: -150,
    maxX: 0,
    maxY: 0,
  });

  const [lavaBalls, setLavaBalls] = useState({
    circle1: { x: 400, y: 200, xSpeed: 0.2, ySpeed: 0.34 },
    circle2: { x: 600, y: 400, xSpeed: -0.5, ySpeed: 0.5 },
    circle3: { x: 800, y: 600, xSpeed: 0.3, ySpeed: 0.6 },
    circle4: { x: 1000, y: 500, xSpeed: -0.1, ySpeed: 0.6 },
    circle5: { x: 900, y: 300, xSpeed: -0.2, ySpeed: 0.3 },
  });

  const updateCirclePosition = (circle: any) => {
    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;
    if (circle.x < bounds.minX) {
      circle.x = bounds.minX + Math.random() * 10;
      circle.xSpeed = Math.abs(circle.xSpeed);
    } else if (circle.x > bounds.maxX) {
      circle.x = bounds.maxX - Math.random() * 10;
      circle.xSpeed = -Math.abs(circle.xSpeed);
    }
    if (circle.y < bounds.minY) {
      circle.y = bounds.minY + Math.random() * 10;
      circle.ySpeed = Math.abs(circle.ySpeed);
    } else if (circle.y > bounds.maxY) {
      circle.y = bounds.maxY - Math.random() * 10;
      circle.ySpeed = -Math.abs(circle.ySpeed);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setBounds({
        minX: -150,
        minY: -150,
        maxX: window.innerWidth + 100,
        maxY: window.innerHeight + 100,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLavaBalls((prevLavaBalls) => {
        const newLavaBalls = { ...prevLavaBalls };
        updateCirclePosition(newLavaBalls.circle1);
        updateCirclePosition(newLavaBalls.circle2);
        updateCirclePosition(newLavaBalls.circle3);
        updateCirclePosition(newLavaBalls.circle4);
        updateCirclePosition(newLavaBalls.circle5);
        return newLavaBalls;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [bounds]);

  return (
    <main className="fixed inset-0 overflow-hidden bg-black flex justify-center items-center">
      {children}
      <div className="metaballs fixed inset-0 -z-10 overflow-hidden">
        <svg className="metasvg fixed h-[110vh] w-[110vw] top-[-20px] left-[-20px] overflow-hidden">
          <defs>
            <filter id="gooify" width="400%" x="-10%" height="400%" y="-150%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="15"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 25 -10"
              />
            </filter>

            <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9867e2" />
              <stop offset="50%" stopColor="#ff6eab" />
              <stop offset="100%" stopColor="#ffd94a" />
            </linearGradient>
          </defs>

          <g filter="url(#gooify)">
            <circle
              className="blobb glow"
              fill="url(#lavaGradient)"
              cx={lavaBalls.circle1.x}
              cy={lavaBalls.circle1.y}
              r="170"
            />
            <circle
              className="blobb glow"
              fill="url(#lavaGradient)"
              cx={lavaBalls.circle2.x}
              cy={lavaBalls.circle2.y}
              r="90"
            />
            <circle
              className="blobb glow"
              fill="url(#lavaGradient)"
              cx={lavaBalls.circle3.x}
              cy={lavaBalls.circle3.y}
              r="120"
            />
            <circle
              className="blobb glow"
              fill="url(#lavaGradient)"
              cx={lavaBalls.circle4.x}
              cy={lavaBalls.circle4.y}
              r="140"
            />
            <circle
              className="blobb glow"
              fill="url(#lavaGradient)"
              cx={lavaBalls.circle5.x}
              cy={lavaBalls.circle5.y}
              r="70"
            />
          </g>
        </svg>
      </div>
    </main>
  );
}
