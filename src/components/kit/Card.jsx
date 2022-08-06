import React from "react";
import Avatar from "./Avatar";
import Stack from "./Stack";

const Card = ({ firstName, lastName, salary, goals, url }) => {
  return (
    <div className="w-96 h-96 shadow-xl rounded-lg">
      <Avatar url={url} />
      <div className="p-3">
        <Stack direction="rows">
          <span className="font-semibold">First Name : {firstName} </span>
          <span className="font-semibold">Last Name : {lastName}</span>
        </Stack>
        <Stack direction="rows">
          <span className="font-semibold">Salary : {salary}</span>
          <span className="font-semibold">Goals : {goals}</span>
        </Stack>
      </div>
    </div>
  );
};

export default Card;
