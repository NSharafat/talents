import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "@/public/w-icon-02.png";

function Slides() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        if (prev == 4) return 0;
        const next = (prev + 1) % 3;
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  console.log(activeSlide);
  return (
    <div className="flex flex-col items-center relative gap-5 overflow-hidden px-2 ">
      <div className="absolute inset-0 z-999 bg-[linear-gradient(to_right,var(--primary),transparent_50%,,var(--primary))] "></div>
      <div className="logo-wrapper  p-2 bg-(--primary)/5 bg-linear-to-bl  to-(--white)/40 from-(--white)/4 rounded-md from-70%  shadow-(--white)">
        <div className="relative w-12 h-12">
          <Image
            src={logo}
            fill
            className="object-contain h-full w-full"
            alt="logo.png"
          />
        </div>
      </div>
      <div className="w-90 relative h-30  z-2">
        <motion.div
          initial={{ x: activeSlide == 0 ? "0px" : "360px", opacity: 0 }}
          animate={{
            x: activeSlide == 0 ? "0px" : "360px",
            opacity: activeSlide == 0 ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className=" flex justify-center min-w-80 px-2 absolute"
        >
          <Slide />
        </motion.div>
        <motion.div
          initial={{ x: activeSlide == 1 ? "0px" : "360px", opacity: 0 }}
          animate={{
            x: activeSlide == 1 ? "0px" : "360px",
            opacity: activeSlide == 1 ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className=" flex justify-center min-w-80 px-2 absolute"
        >
          <Slide />
        </motion.div>
        <motion.div
          initial={{ x: activeSlide == 2 ? "0px" : "360px", opacity: 0 }}
          animate={{
            x: activeSlide == 2 ? "0px" : "360px",
            opacity: activeSlide == 2 ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className=" flex justify-center min-w-80 px-2 absolute"
        >
          <Slide />
        </motion.div>
        {/* <motion.div
          className="flex flex-none border  gap-10 "
          initial={{ x: 0, opacity: 1 }}
          animate={{
            x: `${activeSlide * -360}px`,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <div
            className=" flex justify-center min-w-80 
              px-2"
          >
            <Slide />
          </div>
          <div className=" flex justify-center min-w-80 px-2">
            <Slide />
          </div>
          <div className=" flex justify-center min-w-80 px-2">
            <Slide />
          </div>
        </motion.div> */}
      </div>

      <div className="flex button-wrapper  justify-center gap-1">
        <div
          className={`min-w-1.5 min-h-1.5 rounded-full  transition-all duration-500 bg-(--white)${activeSlide == 0 ? "" : "/10"}`}
        ></div>
        <div
          className={`min-w-1.5 min-h-1.5 rounded-full transition-all duration-500 bg-(--white)${activeSlide == 1 ? "" : "/10"}`}
        ></div>
        <div
          className={`min-w-1.5 min-h-1.5 rounded-full transition-all duration-500 bg-(--white)${activeSlide == 2 ? "" : "/10"}`}
        ></div>
      </div>
    </div>
  );
}

export default Slides;
