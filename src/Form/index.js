import { useState } from "react";
import { Input, StyledForm, SubmitButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    const trimedNewTaskContent = newTaskContent.trim();

    event.preventDefault();
    if (trimedNewTaskContent === "") {
      return;
    }
    addNewTask(trimedNewTaskContent);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        required
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <SubmitButton>Dodaj zadanie</SubmitButton>
    </StyledForm>
  );
};
export default Form;
