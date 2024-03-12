"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const ButtonProject = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 6 }}
      >
        <Link href="#section3">
        <Button variant="outline">
          My Project
          <img src="./icons/arrowDown.svg" className="h-7" />
        </Button>
        </Link>
      </motion.div>
    </>
  );
};

export default ButtonProject;
