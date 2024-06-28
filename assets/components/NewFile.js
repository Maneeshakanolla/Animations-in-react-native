
import React, { useEffect, useState } from "react";
 
const Contact = () => {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    const targetCount = 20;
    let currentCount = 0;
 
    const interval = setInterval(() => {
      if (currentCount < targetCount) {
        currentCount += 1;
        setCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, 100);
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>{count}</h1>
    </div>
  );
};
 
export default Contact;