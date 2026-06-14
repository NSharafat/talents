"use client";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "@/public/w-logo-04.png";
import { RiArrowRightLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-(--primary)/95 h-full w-full py-20 px-10">
      <div className="max-w-270 mx-auto  ">
        <div className="flex gap-10 flex-col">
          <div className="flex flex-wrap justify-between gap-10">
            <div className="flex flex-col items-start gap-5 ">
              <p>Contact us</p>
              <h1 className="text-4xl uppercase">
                Lets{" "}
                <span className="font-bold text-(--secondary)">Discuss</span>{" "}
                <br />
                your&nbsp;project{" "}
              </h1>
              <motion.button
                whileHover="hover"
                whileTap="clicked"
                initial="rest"
                animate="rest"
                variants={{
                  rest: {
                    backgroundColor: "var(--white)",
                    color: "var(--primary)",
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
                <span className="text-[0.8rem]">Let's&nbsp;Connect</span>
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
                  <RiArrowRightLine className="font-bold" />
                </motion.div>
              </motion.button>{" "}
            </div>

            <div className="text-right flex flex-col justify-end md:text-right [@media(max-width:700px)]:text-left">
              <p></p>
              <p>Reageer op deze mail met: “Ik ga akkoord met de offerte</p>
              <p>Probatterij Bonserdyk 3 8601ZE, Sneek</p>
              <p>Reageer op deze mail met: “Ik ga akkoord met de offerte</p>
            </div>
          </div>
          <hr className="bg-(--white)" />
          <div className="flex [@media(max-width:700px)]:flex-col [@media(max-width:700px)]:items-start [@media(max-width:700px)]:gap-10 items-center justify-between">
            <div className="flex   ">
              <Image src={logo} width={150} height={100} alt="logo" />
            </div>
            <div className="flex justify-center">
              <motion.ul className="flex space-x-10 h-full justify-start  items-start  text-(--white) ">
                <motion.li
                  whileHover="hover"
                  variants={{
                    rest: { y: 0 },
                    hover: {
                      y: -2,
                      cursor: "pointer",
                      fontWeight: "500",
                      color: "var(--secondary)",
                    },
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative  group inline-block w-fit  cursor-pointer"
                >
                  Home
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-(--secondary)"
                    initial={{
                      scaleX: 0,
                    }}
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.li>
                <motion.li
                  whileHover="hover"
                  variants={{
                    rest: { y: 0 },
                    hover: {
                      y: -2,
                      cursor: "pointer",
                      fontWeight: "500",
                      color: "var(--secondary)",
                    },
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative  group inline-block w-fit  cursor-pointer"
                >
                  Services
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-(--secondary)"
                    initial={{
                      scaleX: 0,
                    }}
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.li>
                <motion.li
                  whileHover="hover"
                  variants={{
                    rest: { y: 0 },
                    hover: {
                      y: -2,
                      cursor: "pointer",
                      fontWeight: "500",
                      color: "var(--secondary)",
                    },
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative  group inline-block w-fit cursor-pointer"
                >
                  About us
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-(--secondary)"
                    initial={{
                      scaleX: 0,
                    }}
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.li>
              </motion.ul>
            </div>
            <div className="copy-wrapper">
              @talents, {new Date().getFullYear()} . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
