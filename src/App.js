import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const boxAni = keyframes`
  0% {
    transform:rotate(0deg); //deg = degree(각도)
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius:0px;
  }

`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  animation: ${boxAni} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 30px;
    &:hover {
      font-size: 60px;
    }
  } //Box안에 있는 개체를 컴포넌트 스타일 안에 쓸 수 있다.
  //&는 바로위의 태그를 뜻함 span:hover 대신 &:hover로 짧게 쓸 수 있다.
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😂</span>
      </Box>
    </Wrapper>
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

/* 스타일컴포넌트에서 애니메이션을 쓰려면 import에 {keyframes}를 추가한다

 */
