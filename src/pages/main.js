import styled from "styled-components";

function Main() {
  return <MainDiv>This is Main!</MainDiv>;
}

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

export default Main;
