"use client";
import React, { useRef } from "react";
import Curriculo from "@/components/Curriculo";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Profile from "@/components/Profile";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = mainRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mainRef.current?.style.setProperty("--glow-x", `${x}%`);
    mainRef.current?.style.setProperty("--glow-y", `${y}%`);
  };
  return (
    <div className="polkadot">
      <div
        className="content"
        ref={mainRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mainRef.current?.style.setProperty("--glow-x", "50%");
          mainRef.current?.style.setProperty("--glow-y", "50%");
        }}
      >
        <Profile></Profile>

        <div className="main">
          <AboutMe></AboutMe>
          <Curriculo></Curriculo>
          <Skills></Skills>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}
