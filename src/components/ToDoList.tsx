import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categoryState,
  toDoSelector,
  toDoState,
  boardState,
} from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

const Button = styled.button<{ isActive: boolean }>`
  padding: 15px;
  font-size: 20px;
  background-color: ${(props) => (props.isActive ? "#55efc4" : "#00b894")};
  border: none;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #55efc4;
  }
  margin-right: 10px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  //useRecoilState을 이용하여 카테고리값을 받아오고 얻데이트해준다

  const [added, setAdded] = useRecoilState(boardState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.innerText as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <Button onClick={onClick} isActive={category === Categories.TO_DO}>
        {Categories.TO_DO}
      </Button>
      <Button onClick={onClick} isActive={category === Categories.DOING}>
        {Categories.DOING}
      </Button>
      <Button onClick={onClick} isActive={category === Categories.DONE}>
        {Categories.DONE}
      </Button>

      {Object.keys(added).map((item) => (
        <Button onClick={onClick} isActive={category === item}>
          {item}
        </Button>
      ))}
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;

/* 밑에 두함수가 따로따로 기능을 한다면 useRecoilState은 
  useState처럼 2개의 기능을 같이한다 = 가져오기, 수정하기 */
/* const value = useRecoilValue(toDoState); //아톰값 가져오기
  const modFn = useSetRecoilState(toDoState); //이톰값 수정하기 */
