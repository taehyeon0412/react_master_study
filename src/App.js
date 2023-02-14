import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: green;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;
/* style 컴포넌트를 쓸 때에는 백틱 ``을 사용한다 */

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
