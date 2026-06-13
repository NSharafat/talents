"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
import { AnimatePresence, motion, stagger } from "motion/react";
import { RiArrowRightLine, RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const mobNav = {
  start: { opacity: 0, x: 20 },
  end: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};
const navItems = {
  start: { opacity: 0, x: 20 },
  end: { opacity: 1, x: 0 },
};
function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <div className="max-w-200 absolute  z-999   py-3 mt-2 rounded-full md:px-5 px-2 grid grid-cols-[1fr_4fr] mx-auto bg-(--white) border-(--primary) items-center shadow-lg [@media(max-width:768px)]:mx-4">
        <div className="logo-wrapper ">
          <Image src={logo} width={120} alt="logo" />
        </div>
        <div className="hidden md:grid grid-cols-[2fr_1fr] items-center justify-center">
          <div className="flex justify-center  w-full">
            <motion.ul className="flex space-x-10 h-full items-center text-(--primary) ">
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
          <div className="flex  justify-end items-center  w-full ">
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
              <span className="text-[0.8rem]">Sign up</span>
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
          </div>
        </div>
        <div className="flex md:hidden   pr-5 items-center justify-end">
          <div
            className="border rounded p-2 relative  z-999"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <AnimatePresence mode="wait" initial="false">
              {mobileNav ? (
                <motion.div
                  key="close"
                  className="flex justify-center"
                  initial={{ opacity: 0, rotate: 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                >
                  <RiCloseLine className="text-2xl text-(--white)" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  className="flex justify-center"
                  initial={{ opacity: 0, rotate: 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -45 }}
                >
                  <RiMenu3Line className="text-2xl text-(--primary)" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {mobileNav && (
              <motion.div
                initial={{ translateX: "100%" }}
                animate={{ translateX: "0%" }}
                transition={{ duration: 0.5 }}
                exit={{ translateX: "100%" }}
                className="absolute inset-0 flex flex-col justify-between  -mt-2 -mx-4 left-0 z-998 bg-(--primary) h-screen w-screen gap-10 py-10 px-10  "
              >
                <div className="h-12 relative w-12 -my-4">
                  <Image
                    src="/w-icon-02.png"
                    alt="logo"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.ul
                  className="text-2xl text-(--white) flex flex-col  gap-10"
                  variants={mobNav}
                  initial="start"
                  animate="end"
                >
                  <motion.li
                    key="home"
                    variants={navItems}
                    initial={{ y: 0, color: "var(--white)" }}
                    whileHover={{
                      y: -2,
                      color: "var(--secondary)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Home
                  </motion.li>
                  <motion.li key="services" variants={navItems}>
                    Services
                  </motion.li>
                  <motion.li key="about" variants={navItems}>
                    About
                  </motion.li>
                  <motion.li key="button" variants={navItems}>
                    <div className="flex relative justify-left items-center  w-full ">
                      <motion.button
                        whileHover="hover"
                        whileTap="clicked"
                        initial="rest"
                        animate="rest"
                        variants={{
                          rest: {
                            backgroundColor: "var(--secondary)",
                            color: "var(--primary)",

                            y: 0,
                          },
                          hover: {
                            backgroundColor: "var(--primary)",
                            color: "var(--white)",
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
                              backgroundColor: "var(--primary)",
                              color: "var(--secondary)",
                              x: 0,
                            },
                            hover: {
                              backgroundColor: "var(--white) ",
                              color: "var(--primary)",
                              x: 3,
                            },
                          }}
                        >
                          <RiArrowRightLine className="text-1xl font-bold" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default Navbar;
