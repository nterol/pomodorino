import styled from "styled-components";

export const TaskContainer = styled.div`
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${props => props.hex[0]},
    ${props => props.hex[1]}
  );
  color: white;
`;

export default {};
