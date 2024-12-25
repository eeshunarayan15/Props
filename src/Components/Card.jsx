import React from "react";

const Card = ({ text, color }) => {
  return (
    <div>
      <button className={`px-3 py-1  ${color} text-xs rounded m-2`}>
        {text}
      </button>
    </div>
  );
};

export default Card;
