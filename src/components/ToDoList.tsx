import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: "To_DO" | "DOING" | "DONE";
  //모든 string이 아닌 위에 3개만 선택할 수 있도록 제한사항을 줄 수 있다.
  id: number;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [], //빈 배열값을 준다
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  /* 밑에 두함수가 따로따로 기능을 한다면 useRecoilState은 
  useState처럼 2개의 기능을 같이한다 = 가져오기, 수정하기 */
  /* const value = useRecoilValue(toDoState); //아톰값 가져오기
  const modFn = useSetRecoilState(toDoState); //이톰값 수정하기 */
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "To_DO" },
      ...oldToDos,
    ]);
    //input에 값 입력하면 text에 toDo(입력값), category에는 TO_DO로 기록되고
    //oldToDos를 대체한다 ...oldToDos 문법 외우기
    //id: Date.now()는 랜덤값을 주기위해서 씀
    setValue("toDo", ""); //input value의 값 초기화
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "투두를 써주세요",
          })}
          placeholder="Write a to do"
        ></input>
        <button>add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
