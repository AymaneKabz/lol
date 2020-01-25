import { Col } from "antd";
import styled from "styled-components";
import Img from "react-image";
export const Spacing = styled(Col)`
  margin: 2rem 7rem 0 7rem;
  text-align: center;
`;
export const SImg = styled(Img)`
  height: ${props => (props.width ? props.width : "720px")};
  margin-top: 20px;
  pointer-events: none;
`;
