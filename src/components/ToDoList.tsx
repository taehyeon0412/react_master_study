import { useRecoilValue } from "recoil";
import { toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
          //...toDo => atom에 있는 key를 불러오는것
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

/* 밑에 두함수가 따로따로 기능을 한다면 useRecoilState은 
  useState처럼 2개의 기능을 같이한다 = 가져오기, 수정하기 */
/* const value = useRecoilValue(toDoState); //아톰값 가져오기
  const modFn = useSetRecoilState(toDoState); //이톰값 수정하기 */
