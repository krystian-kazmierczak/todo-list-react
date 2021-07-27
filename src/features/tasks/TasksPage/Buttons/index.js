import { useSelector, useDispatch } from "react-redux";
import {
  fetchExampleTasks,
  selectAreTasksEmpty,
  selectHideDoneTasks,
  selectIsEveryTaskDone,
  setAllTaskDone,
  toggleHideDoneTasks,
} from "../../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const dispatch = useDispatch();

  return (
    <StyledButtons>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDoneTasks())}>
            {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllTaskDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  )
};

export default Buttons;
