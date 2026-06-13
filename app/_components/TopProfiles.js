"use client";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  easeInOut,
} from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";
import { RiCheckboxCircleFill, RiCheckFill } from "react-icons/ri";

const cards = [
  {
    card: 1,
    info: "To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other.",
    desc: [
      {
        desc: "This is bullet one",
      },
      {
        desc: "This is bullet two",
      },
      {
        desc: "This is bullet three",
      },
    ],
    src: "/desktop.png",
  },
  {
    card: 2,
    info: "To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other.",
    desc: [
      {
        desc: "This is bullet one",
      },
      {
        desc: "This is bullet two",
      },
      {
        desc: "This is bullet three",
      },
    ],
    src: "/mac.png",
  },
  {
    card: 3,
    info: "To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other.",
    desc: [
      {
        desc: "This is bullet one",
      },
      {
        desc: "This is bullet two",
      },
      {
        desc: "This is bullet three",
      },
    ],
    src: "/iphone.png",
  },
];
function TopProfiles() {
  const contianerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contianerRef,
    offset: ["start 50%", "end 10%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <div className="relative  flex flex-col bg-(--primary) " ref={contianerRef}>
      {/* <div className="bg-(--gray) h-fit flex flex-col relative justify-between items-center py-10 overflow-hidden">
        
      </div> */}
      <div className="top-0 h-full flex flex-col relative justify-start w-full bg-(--primary)  max-w-270 mx-auto">
        <div className="h-full absolute left-4.5 md:left-8.5  [@media(max-width:500px)]:left-8 sm:left-6">
          <div className="h-full w-4 md:w-4 sm:w-2 [@media(max-width:500px)]:w-1 top-0 bg-(--secondary)/10 absolute "></div>
          <motion.div
            className="h-full w-4 md:w-4 sm:w-2 [@media(max-width:500px)]:w-1 origin-top top-0 bg-(--secondary) absolute"
            style={{ scaleY: scaleY, transition: "all 0.5s ease" }}
          ></motion.div>
        </div>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="flex flex-row items-center w-full sticky gap-5 mb-10 py-10 px-5 top-10 justify-between "
            initial={{ y: 50 }}
            whileInView={{ y: 0, postion: "sticky" }}
            transition={{ duration: 0.5, delay: i * 0.5 }}
            viewport={{ amount: 0.1, once: false }}
          >
            <motion.div
              className="min-w-12 min-h-12 [@media(max-width:500px)]:min-w-6 [@media(max-width:500px)]:min-h-6  rounded-full  outline-10 [@media(max-width:500px)]:outline-5 outline-(--primary) bg-(--secondary) sticky flex  items-center justify-center text-center"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1.1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {" "}
              <h1 className="text-3xl [@media(max-width:500px)]:text-[1rem] text-bold">
                0{card.card}
              </h1>
            </motion.div>
            <div className=" bg-(--gray) sticky-card  rounded-2xl ">
              <div className="flex flex-col items-start gap-4  justify-between p-10">
                <div className="flex flex-col items-start gap-1 ">
                  <p className="border-(--primary) items-center py-1 text-xs px-5 rounded-full border text-(--primary)">
                    #TopTalents
                  </p>
                  <h6 className="card-title expertise-main-title  text-(--primary) text-lg transition-all duration-500">
                    Discover outstanding professionals, industry leaders, and
                    innovators,industry leaders, and innovators
                  </h6>
                  <p className="text-(--primary) text-sm">{card.info}</p>
                </div>
                <ul className="text-(--primary) flex flex-col gap-2 border-t-2 pt-5 border-(--primary)/50">
                  {card.desc.map((desc, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <RiCheckboxCircleFill className="text-(--secondary) w-6 h-6" />
                      <p>{desc.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full p-5 flex justify-end ">
                <div className="h-full w-full relative">
                  <Image
                    src={card.src}
                    fill
                    className="h-full w-full object-contain"
                    alt="pc.png"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TopProfiles;
