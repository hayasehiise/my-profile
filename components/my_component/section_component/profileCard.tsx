"use client";

import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <>
      <div className="flex-initial w-80 sm:w-2/3 xl:w-1/3">
        <div className="relative translate-y-48 sm:translate-y-16 translate-x-1">
          <div className="static bg-white pt-32 pb-5 px-5 rounded-xl text-center items-center justify-center">
            <motion.img
              src="./images/my_image.png"
              className="absolute top-0 left-9 sm:left-24 xl:-left-2 w-60 -translate-y-1/2 sm:translate-x-0 xl:translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              className="text-4xl font-bold text-black font-mono"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            >
              Hery Setiawan
            </motion.p>
            <motion.p
              className="text-2xl font-bold text-black font-mono"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            >
              WEB DEVELOPER
            </motion.p>
            <motion.p
              className="text-black font-sans mt-5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            >
              Saya lulusan Universitas Dipa Makassar S1 Teknik Informatika
              dengan IPK 3.75 yang berfokus dalam bidang Web Development. saya
              memiliki skill dalam menggunakan Laravel sebagai backend dan
              ReactJS sebagai frontend, saya ingin mengembangkan skill saya
              dalam dunia industri/bisnis karena selama ini saya hanya
              menggunakan skill saya hanya untuk membuat project rumahan untuk
              mengasah skill saya
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
