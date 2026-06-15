"use client";
import { motion } from "motion/react";
import google from "../public/clients/google.png";
import fiverr from "../public/clients/fiverr.png";
import airbnb from "../public/clients/airbnb.png";
import binance from "../public/clients/binance.png";
import upwork from "../public/clients/upwork.png";
import Image from "next/image";

const logos = [
  { logo: google },
  { logo: fiverr },
  { logo: airbnb },
  { logo: binance },
  { logo: upwork },
  { logo: google },
  { logo: fiverr },
  { logo: airbnb },
  { logo: binance },
  { logo: upwork },
  { logo: google },
  { logo: fiverr },
  { logo: airbnb },
  { logo: binance },
  { logo: upwork },
  { logo: google },
  { logo: fiverr },
  { logo: airbnb },
  { logo: binance },
  { logo: upwork },
];
function TrustedBy() {
  return (
    <motion.div className="relative h-50 w-full flex  overflow-hidden py-5 items-center justify-center">
      <div className=" flex px-5 w-[101%] h-20 bg-(--gray) overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%, _black_75%,_transparent )]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className={` flex flex-none w-full items-center opacity-20 gap-50 md:gap-30 sm:gap-5 [@media(max-width:768px)]:gap-10 overflow-hidde `}
        >
          {logos.map((logo, i) => {
            return <Image key={i} src={logo.logo} height={30} alt="logo" />;
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TrustedBy;
