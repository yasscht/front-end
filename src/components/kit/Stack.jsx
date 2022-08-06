import React from "react";
import cx from "classnames";
const Stack = ({ children, direction }) => {
  return (
    <div
      className={cx(
        "flex items-center justify-between",
        direction === "rows" ? "flex-row" : "flex-col"
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
