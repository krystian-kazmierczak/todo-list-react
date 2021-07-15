import { Wrapper, StyledButton} from "./styled";

const Buttons = ({tasks, hideDoneTasks, toggleHideDoneTasks, setAllTaskDone}) => (
  tasks.length > 0 && (
    <Wrapper>
      <StyledButton 
        onClick={toggleHideDoneTasks}
      >
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllTaskDone}
      >
        Ukończ wszystkie
      </StyledButton>
    </Wrapper>
  )
) 
export default Buttons;
