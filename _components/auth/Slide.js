import Image from "next/image";
import React from "react";
import logo from "@/public/w-icon-02.png";

function Slide() {
  return (
    <div className="flex flex-col relative ">
      <div className="flex flex-col">
        <div className="header-wrapper flex flex-col items-center gap-5">
          <div className="header-text">
            <h2 className="text-[1rem] font-medium text-center">
              {" "}
              Discover outstanding professionals, industry leaders, and
              innovators
            </h2>
          </div>
          <div className="paragaph-wapper">
            <p className="text-center text-(--white)/70 text-xs">
              Discover outstanding professionals, industry leaders, and
              innovators,Discover outstanding professionals, industry leaders,
              and innovators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
