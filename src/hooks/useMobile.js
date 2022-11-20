import { useState, useEffect } from "react";

const getIsMobile = () => {
  const { innerWidth: width } = window;
  return width < 760
};

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    function handleResize() {
      setIsMobile(getIsMobile());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default useMobile;
