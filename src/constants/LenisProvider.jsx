"use client"

import { useEffect } from "react"
import Lenis from "lenis"

 function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smooth: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return children
}

export default LenisProvider;