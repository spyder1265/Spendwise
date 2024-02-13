"use client";

import { motion } from "framer-motion";

const Transition = ({
  children,
  navbar,
}: {
  children: React.ReactNode;
  navbar?: boolean;
}) => {
  return (
    <motion.div
      initial={navbar ? { y: 0, opacity: 0 } : { y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};
export default Transition;
