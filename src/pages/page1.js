import styled from "styled-components";

function Page1() {
  return <Div1>This is page1!</Div1>;
}

const Div1 = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: black;
`;

export default Page1;
