import NavArray from "../components/templates/navArray";
import { GetIssues, PostIssue } from "../lib/api/Issue";
import { useState, useEffect, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Todolist = () => {
  // const todoData = [{ content: "買い物をする" }, { content: "迎えに行く" }];
  const [todoData, setTodoData] = useState([]);
  const [content, setContent] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleGetIssue = async () => {
    try {
      const response = await GetIssues();
      if (response.status === 200) {
        setTodoData(response?.data);
      }
    } catch (err) {}
  };

  // const handleDeleteIssue = async () => {
  //   try {
  //     const response = await DeleteIssue();
  //     if (response.status === 200) {
  //     }
  //   } catch (err) {}
  // };

  const onSubmit = async (data) => {
    reset();
    try {
      const response = await PostIssue(data);
      if (response.status === 200) {
        setContent(response?.data);
        console.log(response?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetIssue();
  }, [content]);

  return (
    <>
      <div className="w-full h-auto flex">
        <div className="w-1/2 h-full">
          {todoData.map((todoArray) => (
            <div key={todoArray.content} className="w-full min-h-content">
              {todoArray.content}
            </div>
          ))}
        </div>
        <div className="w-1/2 h-full">
          <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="indent-2 border-2 border-black h-10"
              type="text"
              {...register("content", {
                required: true,
              })}
            />
            <button type="submit">投稿</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Todolist;

Todolist.getLayout = (page) => (
  <>
    <div className="flex">
      <NavArray />
      {page}
    </div>
  </>
);
