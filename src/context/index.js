import { Children } from "react";
import * as player from "./searchContext";

export default function Context({ children }) {
  return (
    <Context>
      <player.Provider>{Children}</player.Provider>
    </Context>
  );
}
