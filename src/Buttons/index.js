import { StyledButtons, Button} from "./styled";

const Buttons = ({tasks, hideDoneTasks, toggleHideDoneTasks, setAllTaskDone}) => (
  tasks.length > 0 && (
    <StyledButtons>
      <Button 
        onClick={toggleHideDoneTasks}
      >
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllTaskDone}
      >
        Ukończ wszystkie
      </Button>
    </StyledButtons>
  )
) 
export default Buttons;
