import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "투두를 써주세요",
          })}
          placeholder="Write a to do"
        ></input>
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
