import styled, { keyframes } from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Hello</H1>
    </Container>
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

/* const value = event.currentTarget.value 이다
이것을 
const {currentTarget: {value}} = event 로 바꿔 쓸 수있다.
이렇게 쓰는 이유 = >  한꺼번에 많은 것을 묶어서 가져올 수 있기 때문

ex)value, tagName, width, id 4개를 들고오려면
const value = event.currentTarget.value;
const tagName = event.currentTarget.tagName;
const width = event.currentTarget.width;
const id = event.currentTarget.id;
이렇게 써야되는데 

const {
currentTarget: {value, tagName, width, id}
} = event; 으로 깔끔하게 묶어서 쓸 수 있다.
*/
