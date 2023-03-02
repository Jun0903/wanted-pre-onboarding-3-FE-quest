import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Head() {
  const navigate = useNavigate();
  const onMain = () => {
    navigate("/");
  };

  return (
    <HeadDiv>
      <MainButton onClick={onMain}>
        <em>Wanted Pre-onboarding course!</em>
      </MainButton>
    </HeadDiv>
  );
}

const HeadDiv = styled.div`
  width: 100%;
  height: 8vh;
  margin: 0;
  top: 0;
  position: fixed;
  background-color: white;
  border-bottom: solid 2px #bebebe;
`;

const MainButton = styled.div`
  font-size: 3vh;
  font-weight: bold;
  margin-top: 2.5vh;
  margin-left: 1vh;
  cursor: pointer;
  &:hover {
    color: #46aaff;
  }
`;

export default Head;
