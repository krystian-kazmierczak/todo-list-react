import { useRef, useState } from "react";
import { Input, StyledForm, SubmitButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    const trimedNewTaskContent = newTaskContent.trim();

    event.preventDefault();

    if (trimedNewTaskContent === "") {
      return;
    }
    addNewTask(trimedNewTaskContent);
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
        autofocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <SubmitButton>Dodaj zadanie</SubmitButton>
    </StyledForm>
  );
};
export default Form;
