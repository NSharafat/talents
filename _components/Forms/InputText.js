import React from "react";

function InputText({ label, name, type }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={`#${name}`} className="text-(--primary)/70 font-medium">
        {label}
      </label>
      <input
        type={type}
        className="h-10 w-full border-(--primary)/20 border text-(--primary)/80 rounded-sm px-2 py-3"
        id={name}
        name={name}
        placeholder={`Your ${name}`}
      />
    </div>
  );
}

export default InputText;
