import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { boardState } from "../atom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryForm = ({ onAddCategory }: any) => {
  const { register, handleSubmit, setValue } = useForm();

  const setData = useSetRecoilState(boardState);
  const data = useRecoilValue(boardState);

  const onValid = (data: any) => {
    setData((prev: any) => {
      return {
        ...prev,
        [data.newCategory]: [],
      };
    });
    setValue("newCategory", "");
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("newCategory", { required: true })}
        placeholder="카테고리 추가+"
      />
    </Form>
  );
};

export default CategoryForm;
