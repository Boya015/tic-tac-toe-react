import React from "react";
import { PlayerWrapper, AvatarWrapper } from "./Player.styled";
import Avatar from "react-nice-avatar";
import { Subtitle } from "../../styles/General.styled";

function Player({ player, isplayeractive }) {
  return (
    <PlayerWrapper>
      <AvatarWrapper isplayeractive={isplayeractive === true}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>

      <Subtitle>
        {player.name} ({player.choice.toUpperCase()})
      </Subtitle>
      <Subtitle>{player.score}</Subtitle>
    </PlayerWrapper>
  );
}

export default Player;