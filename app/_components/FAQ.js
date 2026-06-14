"use client";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useState } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

const faqs = [
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];
const parentVariants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
const childVariants = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: 360,
    transition: {
      duration: 160,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const questionVariants = {
  start: { y: 50, opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handelMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;
    mouseX.set(xPos * 0.05);
    mouseY.set(yPos * 0.05);
  };
  return (
    <motion.div
      onMouseMove={handelMouseMove}
      variants={parentVariants}
      initial="start"
      whileInView="end"
      className="relative h-full w-full flex flex-col "
    >
      <motion.div
        className="absolute size-40 left-10 top-10 blur-xs -rotate-12 opacity-50 bg-[url('/T-talents-03.png')] bg-contain bg-center bg-no-repeat"
        style={{ x, y }}
      ></motion.div>
      <motion.div
        className="absolute right-20 top-100 size-40  blur-xs rotate-12 opacity-50 bg-[url('/T-talents-03.png')] bg-contain bg-center bg-no-repeat"
        style={{ x, y }}
      ></motion.div>

      <motion.div
        className="absolute right-20 top-30 size-20  blur-xs  rotate-12 opacity-50 bg-[url('/T-talents-03.png')] bg-contain bg-center bg-no-repeat"
        variants={childVariants}
      ></motion.div>

      <div className="flex bg-(--gray)/20 relative z-1">
        <div className="question-wrapper max-w-270 mx-auto py-15 flex  flex-col px-10">
          <div></div>
          <div className="flex flex-col gap-2">
            <div className="flex  flex-col gap-5 mb-10">
              <h1 className="text-4xl text-(--primary)">FAQs</h1>
              <p className="text-(--primary)/75">
                Discover outstanding professionals, industry leaders, and
                innovators from around the globe—all curated in one trusted
                destination.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="question-contents-wrapper hover:cursor-pointer overflow-hidden"
                  onClick={() =>
                    activeFaq == faq.id
                      ? setActiveFaq(null)
                      : setActiveFaq(faq.id)
                  }
                  variants={questionVariants}
                >
                  <div
                    className={`question relative z-1 py-5 px-5 transition-all duration-500 justify-between ${activeFaq == faq.id ? " shadow-md shadow-(color:--gray) bg-(--primary)/20 " : "bg-(--gray)/85"} font-bold gap-10  text-(--primary) items-center`}
                  >
                    <div className={`flex items-center justify-between `}>
                      <h3>What services do we provide for our client?</h3>
                      <AnimatePresence mode="wait" initial="false">
                        {activeFaq == faq.id ? (
                          <motion.div
                            key={"plus"}
                            className="flex justify-center w-6 h-6 items-center "
                            initial={{ opacity: 0, rotate: 45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <RiSubtractFill className="h-full w-full" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key={"minus"}
                            className="flex justify-center  w-6 h-6  items-center "
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <RiAddFill className="h-full w-full" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div
                    className={`bg-(--white) px-10 relative z-0 text-(--primary)/75 transition-all duration-200  ${activeFaq == faq.id ? "h-fit py-10" : " h-0 py-0 "} overflow-hidden`}
                  >
                    <p>
                      Discover outstanding professionals, industry leaders, and
                      innovators from around the globe—all curated in one
                      trusted destination.Discover outstanding professionals,
                      industry leaders, and innovators from around the globe—all
                      curated in one trusted destination.Discover outstanding
                      professionals, industry leaders, and innovators from
                      around the globe—all curated in one trusted destination.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </motion.div>
  );
}

export default FAQ;
