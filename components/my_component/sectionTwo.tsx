"use client";

import { motion } from "framer-motion";
import ButtonContactMe from "./section_component/contactButton";
import SkillCarousel from "./section_component/skillCarousel";

const SectionTwo = () => {
  return (
    <>
      <section className="flex-auto mb-10">
        <div className="flex flex-col">
          <motion.div
            className="flex-initial mx-auto text-center w-1/4 mb-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 4,
                type: "spring",
                stiffness: 100,
                damping: 5,
              },
            }}
          >
            <p className="text-white text-xl sm:text-3xl font-extrabold">My Skills</p>
          </motion.div>
          <motion.div
            className="flex-intial mx-auto w-1/2 sm:w-1/4 mb-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 4,
                type: "spring",
                stiffness: 100,
                damping: 5,
              },
            }}
          >
            <SkillCarousel />
          </motion.div>
          <div className="flex-initial mx-auto">
            <ButtonContactMe />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
