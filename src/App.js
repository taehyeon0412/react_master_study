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

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

/* styled.[태그]에 html태그를 쓰고 싶지않을때에는
as를 사용해서 바꿔줄 수 있다.
ex) <Btn as="a">Log in</Btn> 으로 적으면 "button"대신 
as에 적힌 "a"가 태그로 된다
*/

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="green" />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
    </Father>
  );
}

export default App;
