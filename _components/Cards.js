"use client";

import React from "react";
import CardList from "./CardList";

function Cards() {
  return (
    <div className="flex bg-(--primary)/95 py-10 relative z-999 h-full overflow-hidden px-20 [@media(max-width:765px)]:px-5">
      <CardList />
    </div>
  );
}

export default Cards;
