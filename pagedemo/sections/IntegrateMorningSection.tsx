"use client";

import { useEffect, useRef, useState } from "react";
import IntegrateMorningUI from "../ui/IntegrateMorningUI";

export default function IntegrateMorningSection() {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const [active, setActive] = useState("node");

  // ▶ Play on page load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // ▶ Play (restart) on hover
  const handleVideoHover = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <IntegrateMorningUI
      videoRef={videoRef}
      onMouseEnter={handleVideoHover}
      active={active}
      setActive={setActive}
    />
  );
}
