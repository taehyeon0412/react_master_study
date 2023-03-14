import { atom } from "recoil";

export interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  //모든 string이 아닌 위에 3개만 선택할 수 있도록 제한사항을 줄 수 있다.
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [], //빈 배열값을 준다
});
