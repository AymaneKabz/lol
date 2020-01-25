import React from "react";
import { Spacing } from "./shared.styled";
import { SImg } from "./shared.styled";
import { Popover, Col } from "antd";
import styled from "styled-components";

export default function Spell(props) {
  const SDiv = styled.div`
    width: 20rem;
  `;
  const content = <SDiv>{props.desc}</SDiv>;
  console.log(props);
  return (
    <Spacing span={2}>
      <Popover
        content={content}
        title={props.name}
        trigger="hover"
        arrowPointAtCenter
      >
        <div style={{ cursor: "pointer" }}>
          <SImg
            width="100px"
            src={`http://ddragon.leagueoflegends.com/cdn/10.2.1/img/spell/${props.id}.png`}
            alt=""
          />

          <h3>{props.name}</h3>
        </div>
      </Popover>
    </Spacing>
  );
}
