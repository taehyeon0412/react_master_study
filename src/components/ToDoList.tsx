import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  //useRecoilState을 이용하여 카테고리값을 받아오고 얻데이트해준다
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
    //기존 카테고리값을 선택한 카테고리로 바꿔준다
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To-Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
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
