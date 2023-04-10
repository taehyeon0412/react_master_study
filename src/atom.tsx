import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
/* enums 
같은 문자를 atom내에서 반복해야 할 때, 
혹은 원하는 요소(ex. 특정 문자열)만 받고 싶을 때 고려할 수 있는 사항 */

export interface IToDo {
  text: string;
  category: Categories;
  //모든 string이 아닌 위에 3개만 선택할 수 있도록 제한사항을 줄 수 있다.
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [], //빈 배열값을 준다
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});

/*selector는 atom을 가져다가 output을 변형할 수 있다.  */
