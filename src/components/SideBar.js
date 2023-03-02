import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

function SideBar() {
  const navigate = useNavigate();

  const pages = ["page1", "page2", "page3"];

  const onPage = (e) => {
    navigate("/" + e.slice(-1));
  };

  return (
    <SideBarDiv>
      <Buttons>
        {pages.map((i) => (
          <Button
            key={i}
            onClick={() => {
              onPage(i);
            }}
          >
            {i}
          </Button>
        ))}
      </Buttons>
    </SideBarDiv>
  );
}

const SideBarDiv = styled.div`
  border-right: solid 2px #bebebe;
  position: fixed;
  margin-top: 7vh;
  width: 15vh;
  height: 100vh;
`;

const Buttons = styled.div`
  height: 100%;
`;

const Button = styled.div`
margin: 20%
margin-left: 10px;
text-align: center;
line-height: 150%;
cursor: pointer;
&:hover {
    color: #46AAFF;
  }
`;

export default SideBar;
