"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import {
  RiArrowLeftCircleFill,
  RiArrowRightCircleFill,
  RiStarFill,
} from "react-icons/ri";

const revs = [
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [side, setSide] = useState(-1);
  const yAxis = 100 / revs.length;
  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const [childVariants, setChildVariants] = useState({});

  const imageParentVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const [imageChildVariants, setImageChildVariants] = useState({});

  useEffect(() => {
    const func = () => {
      setChildVariants({
        hidden: {
          y: side > 0 ? -50 : 50,
          opacity: 0,
        },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      });
      setImageChildVariants({
        hidden: {
          x: side > 0 ? -50 : 50,
          opacity: 0,
        },
        show: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      });
    };
    func();
  }, [side]);

  function handleForward(index) {
    setIndex((index) => index - 1);

    if (side > 0) {
      setSide((side) => side * 1);
    } else {
      setSide((side) => side * -1);
    }
  }
  function handleBackward(index) {
    setIndex((index) => index + 1);
    if (side < 0) {
      setSide((side) => side * 1);
    } else {
      setSide((side) => side * -1);
    }
  }
  return (
    <div className="h-full bg-(--primary)/95">
      <div className="max-w-270 mx-auto my-10 bg-(--white) rounded-2xl p-10 py-10">
        <div className="flex py-10">
          <div className="flex  flex-col gap-5 mb-10">
            <h1 className="text-4xl text-(--primary) uppercase">
              Testimonials
            </h1>
            <p className="text-(--primary)/75">
              Discover outstanding professionals, industry leaders, and
              innovators from around the globe—all curated in one trusted
              destination.
            </p>
          </div>
        </div>
        <div className="testimonial-contents-wrapper  text-(--primary) gap-10">
          <div className="wrapper-reviews">
            <div className="flex flex-col  overflow-hidden  h-70">
              <motion.div
                className="flex flex-col transition-all duration-1000"
                style={{
                  transform: `translateY(${index * yAxis}%)`,
                }}
              >
                {revs.map((rev, i) => (
                  <motion.div
                    key={i}
                    variants={parentVariants}
                    initial="hidden"
                    animate={index == -1 * i ? "show" : "hidden"}
                    className=" review-contents-wrapper flex flex-col  justify-start gap-5"
                  >
                    <motion.div
                      className="flex items-center gap-5"
                      variants={childVariants}
                    >
                      <div className="image-wrapper relative border overflow-hidden rounded-full w-12 h-12">
                        <Image
                          src="/user.png"
                          fill
                          className="object-fill h-full w-full"
                          alt="user"
                        />
                      </div>
                      <div className="flex flex-col user-personal-details-wrapper">
                        <h2 className="text-xl font-bold">Jhon Doe</h2>
                        <p className="text-xs">CEO & GD of Facebook</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex flex-col gap-4  ">
                      <motion.div
                        className="flex  bg-(--white)/40 rounded-xl text-justify p-5"
                        variants={childVariants}
                      >
                        <p>
                          Discover outstanding professionals, industry leaders,
                          and innovators,industry leaders, and innovators To
                          make your document look professionally produced, Word
                          provides header, footer, cover page, and text box
                          designs that complement each other.
                        </p>
                      </motion.div>
                      <motion.div
                        className="flex justify-between px-5"
                        variants={childVariants}
                      >
                        <p className="text-xs" style={{ fontSize: "small" }}>
                          21 jan, 2026
                        </p>
                        <div className="rating-wrapper flex items-center gap-2 ">
                          <p style={{ fontSize: "small", fontWeight: "bold" }}>
                            4.9
                          </p>
                          <RiStarFill className="w-4 h-4 text-(-accent)" />
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="image-wrapper justify-end rounded flex  gap-10">
            <div className="flex flex-col gap-5">
              <div
                className={`h-60 flex  flex-row overflow-hidden w-80  transition-all  duration-300`}
              >
                <div
                  className={`flex transition-all duration-500`}
                  style={{ transform: `translateX(${index * 320}px)` }}
                >
                  {revs.map((review, i) => {
                    return (
                      <motion.div
                        key={i}
                        variants={imageParentVariants}
                        initial="hidden"
                        animate={index == -1 * i ? "show" : "hidden"}
                      >
                        <motion.div
                          className="relative min-w-80 h-full flex  rounded-xl overflow-hidden  "
                          variants={imageChildVariants}
                        >
                          <Image
                            src={"/user1.png"}
                            fill
                            className="object-cover h-full w-full"
                            alt="image"
                          />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <hr className="flex w-80 h-2" />
            </div>
          </div>
          <div className=""></div>
          <div className="cta-wrapper  flex justify-end gap-5">
            <button type="button">
              <RiArrowLeftCircleFill
                className={`w-8 h-8 ${index >= 0 ? " text-(--gray) " : " text-(--primary) "}`}
                onClick={() =>
                  index < 0 ? handleBackward(index) : setIndex(index)
                }
              />
            </button>
            <button
              type="button"
              onClick={() =>
                index > -1 * revs.length + 1
                  ? handleForward(index)
                  : setIndex(index)
              }
            >
              <RiArrowRightCircleFill
                className={`w-8 transition-all duration-300 h-8 ${index == -1 * revs.length + 1 ? " text-(--gray) " : " text-(--primary) "}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
