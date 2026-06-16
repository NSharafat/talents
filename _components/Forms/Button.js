"use client";
import React from "react";

function Button({ type, theme, label, clicked }) {
  return (
    <button
      type={type}
      className={`h-10 w-full rounded-sm ${theme == "primary" ? "bg-(--primary)/85 text-(--white)" : "border border-(--gray)/60 text-(--primary)/85"}`}
      onClick={clicked}
    >
      {label}
    </button>
  );
}

export default Button;
