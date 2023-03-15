import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atom";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //바꾸는 인덱스 찾기
      const newToDo = { text, id, category: name as any };
      //새로운 카테고리의 정보는 currentTarget으로 찾은 button의 name을 추가해준다
      //as any는 타입스크립트에게 신경쓰지 말라는뜻
      console.log(targetIndex, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>

      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
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

/* 바꾸는 원리 = 
const food = ["피자","망고","김치","김밥",]에서 "망고"를 "감"으로 바꾸고 싶음
["피자","김치","김밥","감"]이 아닌 ["피자","감","김치","김밥",]으로 바꿀때에는
순서가 가장 중요하다 기존에 있던 "망고"를 빼고 "감"을 뒤에 추가하는게 아니고 "망고" 자리에 "감"이 대체되어야함
    
const front = ["피자]
const back = ["김치","김밥"]
const newArray = [...front,"감",...back]으로 코딩을 하면 "망고"자리에 "감"이 대체가 된다.
// ...front라는건 front에 있는 모든 원소를 쓰는것과 같은 의미
    
기존에 있던 원소를 지우는법 =
const food = ["피자","망고","김치","김밥",]
const target = 1;
food.slice(0,target) ==> ["피자"]
food.slice(target+1) ==>["김치","김밥"] 
// target으로하면 target이 포함되므로 +1을 해줌,끝나는 지점을 적지 않으면 끝까지 선택됨
    
newArray = [...food.slice(0,target), "감", ...food.slice(target+1)]
=->["피자","감","김치","김밥",]
    
새로운 배열로 대체하는건
return [
        ...oldToDos.slice(0, targetIndex),newToDo,...oldToDos.slice(targetIndex + 1),
      ]; 로 쓸 수 있다. */
