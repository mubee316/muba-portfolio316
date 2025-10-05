import { useState, RefObject, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const spring = { damping: 50, stiffness: 150, restDelta: 0.001 };

// export function useFollowPointer(ref: RefObject<HTMLElement>) {
//   const xPoint = useMotionValue(0);
//   const yPoint = useMotionValue(0);
//   const x = useSpring(xPoint, spring);
//   const y = useSpring(yPoint, spring);

//   useEffect(() => {
//     if (!ref.current) return;

//     const handlePointerMove = (event: MouseEvent) => {
//       const { clientX, clientY } = event;
//       const element = ref.current!;

//       // Try without frame.read first
//       xPoint.set(clientX - element.offsetWidth / 2);
//       yPoint.set(clientY - element.offsetHeight / 2);
//     };

//     window.addEventListener("mousemove", handlePointerMove);

//     return () => window.removeEventListener("mousemove", handlePointerMove);
//   }, []); // Empty dependency array - motion values are stable

//   return { x, y };
// }

// Alternative version with console logging for debugging:
export function useFollowPointerDebug(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    
    if (!ref.current) {
      console.log('No ref.current found');
      return;
    }

    const handlePointerMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const element = ref.current!;

      
      const newX = clientX - element.offsetWidth / 2;
      const newY = clientY - element.offsetHeight / 2;
      
      
      xPoint.set(newX);
      yPoint.set(newY);
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      console.log('Cleaning up event listener');
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, [xPoint, yPoint]);

  return { x, y };
}