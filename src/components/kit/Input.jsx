import React from "react";
import cx from "classnames";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const Input = ({
  classnames = "outline-none border-b-2 w-full border-gray-400 focus:border-gray-700 ",
  isSearch,
  onChange,
  name,
}) => {
  return (
    <div className="w-full relative flex items-center ">
      {isSearch && <SearchIcon className="text-black absolute p-2" />}
      <input
        type="text"
        placeholder="chercher un joueur ..."
        className={cx(classnames, isSearch ? "pl-8" : "pl-0")}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
