import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Wrapper, Button } from "../Button/styled";

const FechtExampleTasksButton = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
        {loading ? "Ładowanie...⏳" : "Pobierz przykładowe zadania"}
      </Button>
    </Wrapper>
  );
};

export default FechtExampleTasksButton;
