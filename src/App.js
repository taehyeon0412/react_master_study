import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  // Box에 있는 styled을 적용한다는 뜻
  border-radius: 50px;
`;

/* style 컴포넌트를 쓸 때에는 백틱 ``을 사용한다 */
/* props를 이용하여 코드를 간소화 할 수 있다 */

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="green" />
    </Father>
  );
}

export default App;
