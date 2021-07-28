import { useSelector, useDispatch } from "react-redux";
import {
  selectAreTasksEmpty,
  selectHideDoneTasks,
  selectIsEveryTaskDone,
  selectIsEveryTaskUndone,
  setAllTaskDone,
  toggleHideDoneTasks,
} from "../../tasksSlice";
import { Wrapper, Button } from "../Button/styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isEveryTaskUndone = useSelector(selectIsEveryTaskUndone);
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDoneTasks())}
            disabled={isEveryTaskUndone}>
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
