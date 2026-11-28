import React from "react";

const FormButton = ({text}) => {
  return (
    <button className="bg-primary text-on-background text-sm font-semibold px-3 py-2 rounded-lg cursor-pointer  ">
      {text}
    </button>
  );
};

export default FormButton;
