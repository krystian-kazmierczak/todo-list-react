import { useSelector, useDispatch } from "react-redux";
import {
  selectAreTasksEmpty,
  selectHideDoneTasks,
  selectIsEveryTaskDone,
  selectTasks,
  setAllTaskDone,
  toggleHideDoneTasks,
} from "../../tasksSlice";
import { Wrapper, Button } from "../Button/styled";

const Buttons = () => {
  const tasks = useSelector(selectTasks); 
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => {
            if (tasks.some((task) => task.done)){
            dispatch(toggleHideDoneTasks())}}}>
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
    </Wrapper>
  )
};

export default Buttons;
