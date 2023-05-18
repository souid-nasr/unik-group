"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Counts from "./components/Counts";
import Team from "./components/Team";
export default function Home() {
  return (
    <div>
      <Hero />
      <Counts />
      <Team />
    </div>
  );
}
