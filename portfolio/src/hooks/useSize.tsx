'use client'

import React, { useEffect, useRef, useState } from "react";

// const useSize = (): [number, number] => {
//   const screenWidthOnLoad = useRef<[number, number]>([0, 0]);
//   const [windowSize, setWindowSize] = useState<[number, number]>([0, 0]);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       screenWidthOnLoad.current = [window.innerWidth, window.innerHeight];
//       setWindowSize([window.innerWidth, window.innerHeight]);

//       const windowSizeHandler = () => {
//         setWindowSize([window.innerWidth, window.innerHeight]);
//       };
//       window.addEventListener("resize", windowSizeHandler);

//       return () => {
//         window.removeEventListener("resize", windowSizeHandler);
//       };
//     }
//   }, []);

//   return windowSize;
// };

// export default useSize;

const useSize = (): number => {
    const [width, setWidth] = useState<number>(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return width
  }

  export default useSize;