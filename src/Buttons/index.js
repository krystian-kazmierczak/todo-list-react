import { Wraper, StyledButton} from "./styled";

const Buttons = ({tasks, hideDoneTasks, toggleHideDoneTasks, setAllTaskDone}) => (
  tasks.length > 0 && (
    <Wraper>
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
    </Wraper>
  )
) 
export default Buttons;
