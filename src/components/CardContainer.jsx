import React from "react";
import Card from "./kit/Card";

const CardContainer = ({ searchName, players }) => {
  const filtredPlayers =
    searchName === ""
      ? players
      : players.filter(function (player) {
          return player.firstname.includes(searchName);
        });
  return (
    <div className="py-8 grid grid-cols-3 gap-y-3 grid-flow-row">
      {filtredPlayers.length > 0 ? (
        filtredPlayers.map(
          ({ firstname, lastname, salary, goal, pictureURl }, index) => (
            <Card
              firstName={firstname}
              lastName={lastname}
              salary={salary}
              url={pictureURl}
              goals={goal}
              key={index}
            />
          )
        )
      ) : (
        <div>No result founded</div>
      )}
    </div>
  );
};

export default CardContainer;
