import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewTask } from "../../tasksSlice";
import { Input, StyledForm, SubmitButton } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    const trimedNewTaskContent = newTaskContent.trim();

    event.preventDefault();

    if (trimedNewTaskContent === "") {
      return;
    }

    dispatch(
      addNewTask({
        content: trimedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    focusInput();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        required
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <SubmitButton>Dodaj zadanie</SubmitButton>
    </StyledForm>
  );
};
export default Form;
