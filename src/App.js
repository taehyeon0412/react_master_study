import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: teal;
`;

function App() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;

/* styled.[태그]에 html태그를 쓰고 싶지않을때에는
as를 사용해서 바꿔줄 수 있다.
ex) <Btn as="a">Log in</Btn> 으로 적으면 "button"대신 
as에 적힌 "a"가 태그로 된다
*/

/*공통된속성을 attrs를 이용하여 한번에 부여할 수 있다. 
attrs = Attributes(속성) 줄임말
*/
