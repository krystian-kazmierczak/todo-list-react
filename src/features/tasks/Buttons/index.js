import { useSelector, useDispatch } from "react-redux";
import { selectTasks, setAllTaskDone, toggleHideDoneTasks } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    tasks.length > 0 && (
      <StyledButtons>
        <Button onClick={() => dispatch(toggleHideDoneTasks())}>
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={() => dispatch(setAllTaskDone())}
        >
          Ukończ wszystkie
        </Button>
      </StyledButtons>
    )
  );
};
export default Buttons;
