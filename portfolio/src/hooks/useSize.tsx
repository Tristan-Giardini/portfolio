'use client'

import { useEffect, useState } from "react";

const useSize = (): number => {
    const [width, setWidth] = useState<number>(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return width
  }

  export default useSize;