import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeData }) {
  const {name, id, hp, sprites } = pokeData
  const [isFrontSprite, setIsFrontSprite] = useState(true)

  //console.log("card:  ", pokeData)

  return (
    <Card>
      <div>
        <div className="image" onClick={() => setIsFrontSprite(!isFrontSprite)}>
          <img alt="oh no!" src={isFrontSprite ? sprites.front : sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
