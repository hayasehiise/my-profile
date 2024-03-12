"use client";

import ProfileCard from "./section_component/profileCard";
import SectionOneDetail from "./section_component/sectionOneDetail";
import ButtonContactMe from "./section_component/contactButton";
import SkillCarousel from "./section_component/skillCarousel";
import { motion } from "framer-motion";

type SectionProps = {
    children: React.ReactNode;
};
const Section = ({ children }: SectionProps) => {
  return (
    <>
      <div className="flex flex-col">
        {children}
      </div>
    </>
  );
};

const SectionOne = () => {
  return (
    <Section>
      <section className="flex-auto h-screen sm:h-full mb-72 sm:mb-0">
        <div className="flex flex-col sm:flex-row w-full sm:h-full justify-center items-center">
          <ProfileCard />
          <SectionOneDetail />
        </div>
      </section>
    </Section>
  );
};

const SectionTwo = () => {
  return (
    <Section>
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
            <p className="text-white text-xl sm:text-3xl font-extrabold">
              My Skills
            </p>
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
    </Section>
  );
};

export {SectionOne, SectionTwo};
