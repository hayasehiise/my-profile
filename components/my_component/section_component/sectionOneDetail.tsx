"use client";

import { motion } from "framer-motion";

const SectionOneDetail = () => {
  return (
    <>
      <motion.div
        className="flex-initial justify-end text-end items-end sm:w-1/3 p-5 mt-52 sm:mt-46 sm:mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <p className=" font-black text-white text-5xl">
          Web Development <br />
          For Your
          <br />
          Bussiness
        </p>
        <p className="text-white mt-5 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          magnam tenetur sequi, officia iusto expedita repudiandae voluptatem
          temporibus harum ab quia necessitatibus veniam ducimus fugiat rem fuga
          assumenda beatae error?
        </p>
      </motion.div>
    </>
  );
};

export default SectionOneDetail;
