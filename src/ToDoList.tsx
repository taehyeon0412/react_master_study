import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormData {
  password1: string;
  password2: string;
  email: string;
  userName: string;
  extaError?: string;
}

/*useForm 요소중 register는 onChange이벤트 함수와 
  input에 props를 주고 onChange={onChange},value={value}
   watch는 form 입력값을 추적할 수 있다.
                        */
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
      /* 기본값으로 input창에 자동입력되어
      사용자에게 도움을 줄 수있다 */
    },
  });

  const onValid = (data: IFormData) => {
    /* onValid함수는 모든 유효성이 통과되고 마지막에 호출됨
       ex)name input에 에러가 나면 onValid가 호출안됨*/
    if (data.password1 !== data.password2) {
      setError(
        "password1", //setError는 특정 항목에 대해서 에러를 발생시킴
        { message: "패스워드가 다릅니다" },
        { shouldFocus: true } //강제로 오류가 있는곳으로 포커스가 가게함
      );
    }
    /* setError("extaError", { message: "서버가 오프라인입니다." }); */
    /* setError는 폼 전체에 대해서도 에러를 발생시킬 수 있음 
    추가적인 에러가 필요하다면 항목의 이름을 새로 짓고 조건을 줘서 사용할 수 있다*/
  };

  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("userName", {
            required: "사용자 이름을 쓰세요",
            validate: {
              noTaehyeon: (value) =>
                value.includes("taehyeon") ? "태현이름 안돼요" : true,
              /*value에 태현이 포함된다면 오류메세지 : 통과 */
            },
          })}
          placeholder="userName"
        />
        <span>{errors?.userName?.message}</span>

        <input
          {...register("password1", {
            required: "첫번째 비밀번호를 적으세요",
            minLength: {
              value: 5,
              message: "비번 5글자 이상",
            },
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>

        <input
          {...register("password2", {
            required: "두번째 비밀번호를 적으세요",
            minLength: {
              value: 5,
              message: "비번 5글자 이상",
            },
          })}
          placeholder="password2"
        />
        <span>{errors?.password2?.message}</span>

        <input
          {...register("email", {
            required: "이메일을 적으세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "네이버 메일만 됨",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;

/* react-hook-form 기본 사용법

  function ToDoList() {
    const {register, handleSubmit등등}=useForm<interface>();}

  return(

    <form onSubmit={handleSubmit()}>

    <input 
    {...register("userName", {required: "사용자 이름을 쓰세요",},
        
})}
        placeholder="userName"
      />
</form>
)
  */
