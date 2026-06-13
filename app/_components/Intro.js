"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { RiPlayCircleFill } from "react-icons/ri";

function Intro() {
  const [play, setPlay] = useState(false);
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="video-wrapper h-screen w-full bg-cover bg-[url('/cover.png')]  flex flex-col items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-(--primary)/50 z-3"></div>
      <div
        className={`absolute bg-(--white)/10  border-(--white) border transition-all duration-1000 ${play ? " h-full w-full z-0" : " z-4  h-0 w-0 opacity-0 "}`}
      ></div>
      <div
        className="play-button-wrapper relative z-4 hover:cursor-pointer"
        onClick={() => setPlay(!play)}
      >
        <RiPlayCircleFill className="h-30 w-30 " />
      </div>
      <motion.div></motion.div>
    </motion.div>
  );
}

export default Intro;
