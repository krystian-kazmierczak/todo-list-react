import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { Wrapper, Button } from "../Button/styled";

const FechtExampleTasksButton = () => {
 
    const dispatch = useDispatch();
  
    return (
      <Wrapper>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
          Pobierz przykładowe zadania
        </Button>
      </Wrapper>
    )
  };
  
  export default FechtExampleTasksButton;