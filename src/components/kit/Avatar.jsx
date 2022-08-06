import React from "react";

const Avatar = ({ url }) => {
  return (
    <img src={url} alt="player image" className="w-full h-3/4 object-cover" />
  );
};

export default Avatar;
