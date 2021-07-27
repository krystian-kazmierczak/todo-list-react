import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectTasks, toggleTaskDone, removeTask, selectHideDoneTasks} from "../../tasksSlice";
import { Item, List, Content, Button } from "./styled";

const TasksList = () => {
  const tasks = useSelector(selectTasks); 
  const hideDoneTasks  = useSelector(selectHideDoneTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDoneTasks}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}><Link to={`/zadania/${task.id}`}>{task.content}</Link></Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
