"use client";
import React, { useState } from "react";
import Card from "./Card";
import { motion } from "motion/react";

function CardList() {
  return (
    <motion.div className="cards-wrapper max-w-270 mx-auto relative h-full  w-full gap-4 transition-all duration-500 px-10 [@media(max-width:768px)]:px-0">
      <motion.div
        className="flex w-full card overflow-hidden rounded"
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.2, once: true }}
      >
        <Card />
      </motion.div>
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex h-full w-full card overflow-hidden rounded "
      >
        <Card />
      </motion.div>
      <motion.div
        className="flex h-full w-full card overflow-hidden rounded"
        initial={{
          y: 300,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
      >
        <Card />
      </motion.div>
    </motion.div>
  );
}

export default CardList;
