'use client'

import ProfileCard from "./section_component/profileCard";
import SectionOneDetail from "./section_component/sectionOneDetail";
import { motion } from "framer-motion";

const SectionOne = () => {
    return(
        <>
        <section className="flex-auto h-screen sm:h-full mb-72 sm:mb-0">
          <div className="flex flex-col sm:flex-row w-full sm:h-full justify-center items-center">
            <ProfileCard />
            <SectionOneDetail />
          </div>
        </section>
        </>
    );
}

export default SectionOne;