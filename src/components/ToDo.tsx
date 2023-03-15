import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atom";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name };
      console.log(targetIndex, newToDo);
      return oldToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>

      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;

/* 인자가 있는 event를 처리하는 법
기본 사용은 onClick={onClick}인데
인자가 있는 event를 처리할때에는 onClick ={()=>onClick"인자"}로 한다.
*/

/* newCategory: "TO_DO" | "DOING" | "DONE"; 을
   newCategory: IToDo["category"]로 짧게 쓸 수 있다.*/

/* 1.인자를 받는 함수를 직접 만들고 버튼onClick 이벤트에 인자를 넘겨주고
클릭시 인자를 알 수 있는 방법

   2.인자로 받지 않는 대신 각각의 버튼에 각각 name을 지정
    click event가 발생하면 event.currentTarget.name으로 알 수 있는 방법
 */
