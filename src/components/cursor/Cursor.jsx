import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const handleLinkHover = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className="cursor"
      style={{ pointerEvents: "none" }} // Disable pointer events to prevent cursor from intercepting clicks
      animate={{ x: position.x - 23, y: position.y - 23 }}
    >
      {/* Additional code to check if cursor is hovering over a link */}
      <div className="cursor-follower" />
      <div className="cursor-pointer" />
    </motion.div>
  );
};

export default Cursor;
