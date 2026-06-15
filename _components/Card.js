"use client";
import { motion } from "motion/react";

import { RiPlayCircleFill } from "react-icons/ri";

const footer = {
  hidden: {},
  shown: {},
};
const footerItem = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  shown: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Card() {
  return (
    <div className="py-5 md:px-5 relative mx-auto w-full h-full  border rounded flex flex-col justify-between bg-(--white) overflow-hidden gap-10 [@media(max-width:765px)]:px-2 ">
      <div className="text-(--primary) flex items-start flex-col  gap-10">
        <p className="tags py-1 text-xs px-3 rounded-full flex bg-(--secondary) text-(--white)">
          #TopTalents
        </p>
        <div className="flex flex-col gap-3">
          <h5 className="card-title font-bold text-(--primary)/80 text-lg transition-all duration-500">
            Discover outstanding professionals, industry leaders, and innovators
          </h5>
          <p className="text-sm text-(--primary)/75">
            To make your document look professionally produced, Word provides
            header, footer, cover page, and text box designs that complement
            each other.
          </p>
        </div>
      </div>
      <motion.div
        variants={footer}
        initial="hidden"
        whileHover="shown"
        className="w-full rounded relative overflow-hidden flex items-end h-75 p-5 bg-[url('/user1.png')]  bg-center bg-cover bg-no-repeat"
      >
        <div className="card-footer absolute z-0 inset-0 bg-linear-to-t from-(--primary) to-transparent"></div>
        <div className="relative z-2 flex items-center justify-between  w-full">
          <div>
            <h2 className="text-md font-bold">92% Successfull projects</h2>
            <p className="text-[0.5rem]">Talented freelancers</p>
          </div>
          <motion.div
            className="hover:cursor-pointer text-(--secondary)"
            variants={footerItem}
          >
            <RiPlayCircleFill className="w-8 h-8 shadow-lg " />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
