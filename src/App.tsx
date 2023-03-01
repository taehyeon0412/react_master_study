import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="green" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
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

/* ${(props) => props.theme.textColor}; 처럼 
props를 이용하여 index에 있는 theme(테마) 속성을 이용할 수 있다. */
