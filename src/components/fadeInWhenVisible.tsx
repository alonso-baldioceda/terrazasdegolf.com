import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Props
interface IProps {
  children: any;
}

const FadeInWhenVisible: React.FC<IProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { scale: 1, y: 0 },
        hidden: { scale: 0.985, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
