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
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    mainRef.current?.style.setProperty("--glow-x", `${Math.round((x / rect.width) * 100)}%`);
    mainRef.current?.style.setProperty("--glow-y", `${Math.round((y / rect.height) * 100)}%`);
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
