"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

const Boxes = 200;

const heroVarient = {
  init: {
    y: 50,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,

    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};
const heroItems = {
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
function Hero() {
  return (
    <div className="absolute z-0 h-full bg-(--white) w-full flex flex-col overflow-hidden ">
      <div className="absolute inset-0 grid grid-cols-20 w-full h-full z-2 ">
        {Array.from({ length: Boxes }).map((_, i) => {
          return (
            <motion.div
              key={i}
              className="border aspect-square rounded-md border-(--primary)/1"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(30, 30, 36,0.1)",
              }}
              transition={{ duration: 0.2 }}
            />
          );
        })}
      </div>
      <div className="max-w-200  relative text-(--primary) z-999  mx-auto top-40 flex flex-col items-center ">
        <motion.div
          className="flex flex-col gap-10"
          variants={heroVarient}
          initial="init"
          animate="final"
        >
          <motion.div className="reviews px-10" variants={heroItems}>
            <div className="list flex items-center gap-2 font-bold justify-center">
              <ul className="flex -space-x-3 ">
                <li>
                  <div className="w-8  h-8 overflow-hidden bg-(--primary) rounded-full relative">
                    <Image
                      src="/user.png"
                      fill
                      className="object-cover h-full w-full"
                      alt="user"
                    />
                  </div>
                </li>
                <li>
                  <div className="w-8  h-8 overflow-hidden bg-(--primary) rounded-full relative">
                    <Image
                      src="/user1.jpg"
                      fill
                      className="object-cover h-full w-full"
                      alt="user"
                    />
                  </div>
                </li>
                <li>
                  <div className="w-8  h-8 overflow-hidden bg-(--primary) rounded-full relative">
                    <Image
                      src="/user2.PNG"
                      fill
                      className="object-cover h-full w-full"
                      alt="user"
                    />
                  </div>
                </li>
              </ul>
              <p>125K+ Global talents</p>
            </div>
          </motion.div>
          <motion.div
            className="md:text-7xl [@media(max-width:768px)]:text-2xl "
            variants={heroItems}
          >
            <h1 className="text-center font-bold">The World&apos;s</h1>
            <h1 className="text-center font-bold">
              Most Exceptional{" "}
              <span className="text-(--secondary)">Talents.</span>
            </h1>
          </motion.div>
          <motion.div className="flex flex-col gap-2 " variants={heroItems}>
            <div className="px-10 [@media(min-width:300px)]:px-10">
              <p className="text-center">
                Discover outstanding professionals, industry leaders, and
                innovators from around the globe—all curated in one trusted
                destination.
              </p>
            </div>
            <div className="tags gap-2 flex uppercase flex-row m-w-200 mx-auto md:flex-row sm:gap-1 [@media(max-width:768px)]:flex-col  justify-center md:gap-2 opacity-75">
              <motion.button
                className="tags py-2 px-5 border-(--primary) border rounded "
                initial={{
                  backgroundColor: "rgba(var(--primary)/0.4)",
                }}
                animate={{
                  backgroundColor: "rgba(var(--primary)/1)",
                  cursor: "pointer",
                }}
                transition={{ duration: 1 }}
              >
                <span className="text-(--secondary)">#</span>Curated.
              </motion.button>
              <motion.button className="tags py-2 px-5 border-(--primary) border rounded bg-(--primary)/1">
                <span className="text-(--secondary)">#</span>Verified.
              </motion.button>
              <motion.button className="tags py-2 px-5 border-(--primary) border rounded bg-(--primary)/1">
                <span className="text-(--secondary)">#</span>Connected.
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="flex  justify-center relative z-999  items-center  w-full "
            variants={heroItems}
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
              className=" bg-(--primary) justify-between py-2 px-5  flex items-center  gap-2 rounded-full"
            >
              <span className="text-[0.8rem]">Hire talents</span>
              <motion.div
                className="rounded-full p-2"
                variants={{
                  rest: {
                    backgroundColor: "var(--white) ",
                    color: "var(--primary)",
                    x: 0,
                  },
                  hover: {
                    backgroundColor: "var(--primary)",
                    color: "var(--secondary)",
                    x: 3,
                  },
                }}
              >
                <RiArrowRightLine className="text-1xl font-bold" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 top-[90%] left-0 bg-linear-to-t from-(--white) to-transparent z-2 "></div>
    </div>
  );
}

export default Hero;
