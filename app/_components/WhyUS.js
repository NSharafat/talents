"use client";
import {
  RiAiGenerate2,
  RiCodeFill,
  RiGlobalFill,
  RiHome9Fill,
  RiStarFill,
  RiSwitchFill,
  RiThumbUpFill,
  RiTimeFill,
} from "react-icons/ri";
import { motion } from "motion/react";

const cards = [
  {
    icon: <RiGlobalFill className="w-6 h-full " />,
  },
  {
    icon: <RiTimeFill className="w-6 h-full " />,
  },
  {
    icon: <RiHome9Fill className="w-6 h-full " />,
  },
  {
    icon: <RiStarFill className="w-6 h-full " />,
  },
  {
    icon: <RiCodeFill className="w-6 h-full " />,
  },
  {
    icon: <RiThumbUpFill className="w-6 h-full " />,
  },
];

const button = {
  init: {
    y: 50,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const wrapperVariants = {
  start: {
    y: 50,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      staggerChildren: 0.3,
    },
  },
};
const childCard = {
  start: {
    y: 50,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

function WhyUS() {
  return (
    <motion.div
      className="flex h-full"
      variants={wrapperVariants}
      initial="start"
      whileInView="end"
    >
      <div className="max-w-270 h-full bg-(--white) w-full flex flex-col mx-auto py-20 px-15">
        <div className="why-us-title-wrapper grid grid-cols-[4fr_4fr]  w-full">
          <div className="title-wrapper w-full  text-(--primary)">
            <h1 className="text-4xl main-title uppercase">
              <span>When</span>
              <span> People</span>
              <span className="flex flex-row gap-2 text-(--secondary) font-bold">
                Choose <RiSwitchFill className="w-12" />
                to
              </span>
              <span>work with us </span>
            </h1>
          </div>
          <motion.div
            className="why-us-cta-button flex  justify-end  relative z-999  items-end  w-full "
            variants={button}
          >
            <motion.button
              whileHover="hover"
              whileTap="clicked"
              initial="rest"
              animate="rest"
              variants={{
                rest: {
                  backgroundColor: "var(--primary)",
                  color: "var(--white)",
                  y: 0,
                },
                hover: {
                  backgroundColor: "var(--secondary)",
                  color: "var(--primary)",
                },
                clicked: {
                  y: -6,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.2,
              }}
              className=" bg-(--primary) justify-between py-4 px-5  flex items-center  gap-2 rounded-full"
            >
              <RiAiGenerate2 className="text-xl font-bold" />
              <span className="text-[0.8rem]">Get our Recommend talents</span>
            </motion.button>
          </motion.div>
        </div>
        <motion.div className="why-choose-us-cards-wrapper grid grid-cols-3 gap-x-5 gap-y-15 mt-16">
          {cards.map((card, i) => {
            return (
              <motion.div
                className="group flex flex-col bg-(--white) rounded p-5 gap-5"
                key={i}
                variants={childCard}
                whileHover={{
                  boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
              >
                <motion.div className="group-hover:text-(--secondary) transition-all duration-200 text-(--primary)">
                  {/* <RiGlobalLine className="w-6 h-full " /> */}
                  {card.icon}
                </motion.div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg leading-tight font-bold text-(--primary)">
                    Top skills from around the&nbsp;globe{" "}
                  </h3>

                  <p className="text-(--primary)/75">
                    Discover outstanding professionals, industry leaders, and
                    innovators from around the globe—all curated in one trusted
                    destination.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WhyUS;
