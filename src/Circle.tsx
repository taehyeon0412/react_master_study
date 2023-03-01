import styled from "styled-components";
import { useState } from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 20px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [value, setValue] = useState();

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "black"}>
      {text}
    </Container>
  );
}

export default Circle;

/* interface PlayerShape {
  name: string;
  age: string;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.age} you are ${playerObj.name}`;

sayHello({ name: "th", age: "12" });
sayHello({ bb: "11" }); PlayerShape에 해당내용이 없으면 오류로 나타내줌 */

/* interface => object가 어떤식으로 보일지 설명해주는것*/

/* 널 병합 연산자 (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고,
그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다. 
borderColor ?? "black"

(?)는 옵션선택 연산자이다 어떤 옵션을 선택을 해도 되고 안해도 된다는 뜻
borderColor?: string;
선택을 하지 않으면 undefined 상태가 됨
*/
