'use client'

import React, { useEffect, useRef, useState } from "react";

const useSize = (): [number, number] => {
  const screenWidthOnLoad = useRef<[number, number]>([window.innerWidth, window.innerHeight]);
  const [windowSize, setWindowSize] = useState<[number, number]>([
    screenWidthOnLoad.current[0],
    screenWidthOnLoad.current[1],
  ]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useSize;