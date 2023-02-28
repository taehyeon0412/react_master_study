import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface PlayerShape {
  name: string;
  age: string;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.age} you are ${playerObj.name}`;

sayHello({ name: "th", age: "12" });
sayHello({ bb: "11" }); //PlayerShape에 해당내용이 없으면 오류로 나타내줌

/* interface => object가 어떤식으로 보일지 설명해주는것
    
*/
