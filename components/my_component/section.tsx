"use client";

import ProfileCard from "./section_component/profileCard";
import SectionOneDetail from "./section_component/sectionOneDetail";
import SkillCarousel from "./section_component/skillCarousel";
import { motion } from "framer-motion";
import ProjectCarousel from "./section_component/projectCarousel";
import ButtonProject from "./section_component/projectButton";

type SectionProps = {
  children: React.ReactNode;
};
const Section = ({ children }: SectionProps) => {
  return (
    <>
      <div className="flex flex-col">{children}</div>
    </>
  );
};

export const SectionOne = () => {
  return (
    <Section>
      <section className="flex-auto h-screen sm:h-full mb-64 sm:mb-5 sm:mt-5">
        <div className="flex flex-col sm:flex-row w-full sm:h-full justify-center items-center">
          <ProfileCard />
          <SectionOneDetail />
        </div>
      </section>
    </Section>
  );
};

export const SectionTwo = () => {
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
            <ButtonProject />
          </div>
        </div>
      </section>
    </Section>
  );
};

export const SectionThree = () => {
  return (
    <Section>
      <section className="flex-auto mb-10 p-10" id="section3">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-white text-xl sm:text-3xl font-extrabold text-center mb-16">
          My Projects
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-initial mx-auto w-full sm:w-1/2">
          <ProjectCarousel />
        </motion.div>
      </section>
    </Section>
  );
};
