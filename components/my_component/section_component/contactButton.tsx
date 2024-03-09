"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ButtonContactMe = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 6 }}
      >
        <Button variant="outline">
          Contact Me
          <img src="./icons/contact.svg" className="h-7" />
        </Button>
      </motion.div>
    </>
  );
};

export default ButtonContactMe;
