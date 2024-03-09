"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const ButtonContactMe = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 6 }}
      >
        <Link href="https://wa.me/6285343716854/?text=Hallo,%20Saya%20tertarik%20dengan%20website%20anda/">
        <Button variant="outline">
          Contact Me
          <img src="./icons/contact.svg" className="h-7" />
        </Button>
        </Link>
      </motion.div>
    </>
  );
};

export default ButtonContactMe;
