import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { categoryState, toDoState } from "../atom";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState); //변경할때 set
  const category = useRecoilValue(categoryState); //받아오는값 value
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: category },
      ...oldToDos,
    ]);
    //input에 값 입력하면 text에 toDo(입력값), category에는 TO_DO로 기록되고
    //oldToDos를 대체한다 ...oldToDos 문법 외우기
    //id: Date.now()는 랜덤값을 주기위해서 씀
    //category: category 카테고리를 선택하면 선택한 카테고리에 바로 추가하기위해
    setValue("toDo", ""); //input value의 값 초기화
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", {
          required: "투두를 써주세요",
        })}
        placeholder="Write a to do"
      ></input>
      <button>add</button>
    </form>
  );
}

export default CreateToDo;
