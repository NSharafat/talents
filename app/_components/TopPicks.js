"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RiStarFill } from "react-icons/ri";

const revs = [
  {
    id: 1,
    name: "St Jawed",
    src: "/user1.png",
  },
  { id: 3, name: "John Doe", src: "/user2.PNG" },
  { id: 4, name: "Cristian Kroos", src: "/user1.jpg" },
  { id: 5, name: "J. Paul", src: "/user1.png" },
  { id: 6, name: "Ronald G.", src: "/user2.PNG" },
  { id: 7, name: "Nobel Prize", src: "/user1.jpg" },
  { id: 8, name: "Dr Strange", src: "/user.png" },
  {
    id: 9,
    name: "St Jawed",
    src: "/user1.png",
  },
  { id: 10, name: "John Doe", src: "/user2.PNG" },
  { id: 11, name: "Cristian Kroos", src: "/user1.jpg" },
  { id: 12, name: "J. Paul", src: "/user1.png" },
  { id: 13, name: "Ronald G.", src: "/user2.PNG" },
  { id: 14, name: "Nobel Prize", src: "/user1.jpg" },
  { id: 15, name: "Dr Strange", src: "/user.png" },
  {
    id: 16,
    name: "St Jawed",
    src: "/user1.png",
  },
  { id: 17, name: "John Doe", src: "/user2.PNG" },
  { id: 18, name: "Cristian Kroos", src: "/user1.jpg" },
  { id: 19, name: "J. Paul", src: "/user1.png" },
  { id: 20, name: "Ronald G.", src: "/user2.PNG" },
  { id: 21, name: "Nobel Prize", src: "/user1.jpg" },
  { id: 22, name: "Dr Strange", src: "/user.png" },
];
function TopPicks() {
  const [activeCenter, setActiveCenter] = useState(4);
  const [hovered, setHovered] = useState(false);
  const indexRef = useRef(4);

  useEffect(() => {
    if (hovered) {
      return;
    }

    const interval = setInterval(() => {
      setActiveCenter((prev) => {
        const next = prev + 1 > revs.length ? 1 : prev + 1;
        indexRef.current = next;
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered]);
  return (
    <div className="bg-(--primary)/95 h-full w-full py-20 overflow-hidden px-10">
      <div className="max-w-270 mx-auto ">
        <div className="flex py-10 flex-col  w-full">
          <div className="flex flex-col gap-5 mb-10  w-full">
            <h1 className="text-(--secondary) uppercase">Top Picks for you</h1>
            <p className="text-(--white)">
              Discover outstanding professionals, industry leaders, and
              innovators from around the globe—all curated in one trusted
              destination.
            </p>
          </div>
          <hr className=" bg-(--white)" />
        </div>
        <motion.div
          className="flex main-wrapper  my-10 items-end  py-5 h-100  "
          initial={{ x: 0 }}
          animate={{
            x: activeCenter < 3 ? 0 : -((activeCenter - 3) * 216),

            repeatCount: Infinity,
          }}
          transition={{ duration: 0.5, repeatType: "reverse" }}
          drag="true"
        >
          {revs.map((rev, i) => (
            <div key={i}>
              <motion.div
                key={i}
                onMouseOver={() => {
                  setActiveCenter(i + 1);
                  setHovered(true);
                }}
                onMouseLeave={() => {
                  setHovered(false);
                }}
                initial={{ y: 0 }}
                whileTap={{
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
                className={`image-wrapper ${i + 1 == activeCenter ? "md:min-h-90 md:min-w-70" : "min-h-70 min-w-50"}   relative overflow-hidden transition-all justify-start duration-500  bg-(--gray) rounded-2xl mx-2 flex items-baseline hover:cursor-pointer`}
              >
                <Image
                  src={rev.src}
                  fill
                  className="object-cover h-full w-full"
                  alt="image"
                />
              </motion.div>
              <div className="info-contents-wrapper flex justify-between px-5 mt-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-md font-bold text-(--white)">
                    {rev.name}
                  </h2>
                  <p className="text-xs text-(--white)/70">{rev.name}</p>
                </div>
                <div className="flex justify-end flex-col text-right gap-2 items-center">
                  <RiStarFill className="w-5 h-5 text-right" />
                  <p className="text-xs text-(--white)/70">4.8</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TopPicks;
/* 
 ${
            i + 1 < center
              ? `perspective-dramatic  rotate-y-${Math.ceil(100 - i * angleStep)}`
              : i + 1 > center
                ? `perspective-dramatic  -rotate-y-${Math.ceil(100 - i * angleStep) > 0 ? Math.ceil(100 - i * angleStep) > 0 : Math.ceil(100 - i * angleStep) * -1}`
                : `rotate-y-${Math.ceil(100 - i * angleStep)}`
          } */
/*

style={{
              ...(i + 1 < center
                ? {
                    perspective: `${200 * (i + 1)}px`,
                    transform: `rotateY(${Math.ceil((center - i - 1) * leftAngleStep - leftAngleStep) * -1}deg)`,
                    marginBottom: `${40 * (center + i + 1)}px`,
                    transition: "all 0.5s",
                  }
                : i + 1 > center
                  ? {
                      perspective: `${200 * (i + 1)}px`,
                      transform: `rotateY(${Math.ceil((center - i + 1) * rightAngleStep) - rightAngleStep}deg)`,
                      marginBottom: `${40 * (1 * (center + (center - i + 3)))}px`,
                      transition: "all 0.5s",
                    }
                  : i + 1 == center
                    ? {
                        marginBottom: `${40 * (center + i + 3)}px`,
                        transition: "all 0.5s",
                      }
                    : ""),
            }}*/
