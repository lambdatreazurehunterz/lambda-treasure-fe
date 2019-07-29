import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 1rem;
  line-height: 1.3;
  .room,
  .cool-down {
    font-family: ${p => p.theme.headingFont};
  }
  .title {
    font-size: 1.25em;
  }
  .desc {
    font-style: italic;
  }
  .cool-down {
    color: orange;
  }
`;

export default function HUD({ gameState }) {
  const { id, description, title, exits, messages, errors } = gameState.currentRoom;
  return (
    <Styles>
      <div className="room">#{id}</div>
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div className="exits">Exits: {exits.map(e => e.toUpperCase()).join(', ')}</div>
      {errors && (
        <div className="errors">
          {errors.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </div>
      )}
      {messages && (
        <div className="errors">
          {messages.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </div>
      )}
      {gameState.coolDown > 0 && <div className="cool-down">CoolDown {gameState.coolDown}</div>}
    </Styles>
  );
}
