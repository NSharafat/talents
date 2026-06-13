"use client";
import { motion } from "motion/react";

const parentVarients = {
  start: {},
  end: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};
const childVarients = {
  start: {
    y: 50,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
const tVarients = {
  start: {
    y: 50,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 0.15,
    transition: { duration: 0.5 },
  },
};
function ExpertiseSection() {
  return (
    <div className="w-full h-full bg-[url('/cover.png')] bg-cover bg-center bg-no-repeat  ">
      <div className="bg-(--secondary)/20 absolute inset-0 z-1"></div>
      <div className="bg-(--primary)/70 absolute inset-0 z-1"></div>
      <div className="flex relative z-2 py-20  max-w-270 mx-auto">
        <motion.div
          className="expertise-contents-wrapper items-center "
          variants={parentVarients}
          initial="start"
          whileInView="end"
          viewport={{ amount: 0.1 }}
        >
          <div className="title flex flex-col gap-10 justify-between">
            <motion.div className="flex" variants={childVarients}>
              <p className="border-(--secondary) items-center py-1 text-xs px-3 rounded-full border text-(--secondary)">
                #TopTalents
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-3 justify-end "
              variants={childVarients}
            >
              <h6 className="card-title expertise-main-title  text-(--white) text-lg transition-all duration-500">
                Discover outstanding professionals, industry leaders, and
                innovators
              </h6>
            </motion.div>
          </div>
          <motion.div
            className="desc flex flex-col items-start h-full justify-end "
            variants={childVarients}
          >
            <h5 className="text-3xl expertise-sub-title text-(--white)">
              To make your document look professionally produced, Word provides
              header, footer, cover page, and text box designs that complement
              each other.
            </h5>
          </motion.div>
          <motion.div
            className="flex h-full relative w-full bg-[url('/T-talents-03.png')] opacity-15 bg-cover bg-center bg-no-repeat mix-blend-multiply"
            variants={tVarients}
          ></motion.div>
          <motion.div
            className="expertise-cards-wrapper  relative gap-5 "
            variants={parentVarients}
            initial="start"
            whileInView="end"
            viewport={{ amount: 0.1 }}
          >
            <motion.div
              className="group h-60 w-full relative backdrop-blur-sm bg-(--white)/5 border  flex flex-col "
              variants={childVarients}
            >
              <div className="absolute inset-0  m-5">
                <div className="bg-(--white) left-0 top-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) left-0 bottom-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) right-0 top-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) right-0 bottom-0 absolute rounded-full w-2 h-2"></div>
              </div>
              <div className="relative flex  h-full flex-col justify-between gap-5 p-10">
                {/* <div className="flex flex-col items-center text-(--secondary)">
                    <RiUser6Fill className="w-8 h-8" />
                  </div> */}
                <h2 className="text-6xl group-hover:text-(--secondary)  group-hover:font-bold  transition-all duration-300">
                  12.4K+
                </h2>
                <div className="flex flex-col gap-5">
                  <hr className="w-full " />
                  <p>Talented freelancers</p>
                </div>
              </div>
            </motion.div>{" "}
            <motion.div
              className="group h-60 w-full relative backdrop-blur-sm bg-(--white)/5 border  flex flex-col "
              variants={childVarients}
            >
              <div className="absolute inset-0  m-5">
                <div className="bg-(--white) left-0 top-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) left-0 bottom-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) right-0 top-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) right-0 bottom-0 absolute rounded-full w-2 h-2"></div>
              </div>
              <div className="relative flex  h-full flex-col justify-between gap-5 p-10">
                {/* <div className="flex flex-col items-center text-(--secondary)">
                    <RiUser6Fill className="w-8 h-8" />
                  </div> */}
                <h2 className="text-6xl group-hover:text-(--secondary) group-hover:font-bold transition-all duration-300 ">
                  12.4K+
                </h2>
                <div className="flex flex-col gap-5">
                  <hr className="w-full " />
                  <p>Talented freelancers</p>
                </div>
              </div>
            </motion.div>{" "}
            <motion.div
              className="group h-60 w-full relative backdrop-blur-sm bg-(--white)/5 border  flex flex-col"
              variants={childVarients}
            >
              <div className="absolute inset-0  m-5">
                <div className="bg-(--white) left-0 top-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) left-0 bottom-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) right-0 top-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) right-0 bottom-0 absolute rounded-full w-2 h-2"></div>
              </div>
              <div className="relative flex  h-full flex-col justify-between gap-5 p-10">
                {/* <div className="flex flex-col items-center text-(--secondary)">
                    <RiUser6Fill className="w-8 h-8" />
                  </div> */}
                <h2 className="text-6xl group-hover:text-(--secondary) group-hover:font-bold transition-all duration-300 ">
                  12.4K+
                </h2>
                <div className="flex flex-col gap-5">
                  <hr className="w-full " />
                  <p>Talented freelancers</p>
                </div>
              </div>
            </motion.div>{" "}
            <motion.div
              className="group h-60 w-full relative backdrop-blur-sm bg-(--white)/5 border  flex flex-col "
              variants={childVarients}
            >
              <div className="absolute inset-0  m-5">
                <div className="bg-(--white) left-0 top-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) left-0 bottom-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) right-0 top-0 absolute rounded-full w-2 h-2"></div>
                <div className="bg-(--white) right-0 bottom-0 absolute rounded-full w-2 h-2"></div>
              </div>
              <div className="relative flex  h-full flex-col justify-between gap-5 p-10">
                {/* <div className="flex flex-col items-center text-(--secondary)">
                    <RiUser6Fill className="w-8 h-8" />
                  </div> */}
                <h2 className="text-6xl group-hover:text-(--secondary) group-hover:font-bold transition-all duration-300 ">
                  12.4K+
                </h2>
                <div className=" flex flex-col gap-5">
                  <hr className="w-full " />
                  <p>Talented freelancers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>{" "}
        </motion.div>
      </div>
    </div>
  );
}

export default ExpertiseSection;
