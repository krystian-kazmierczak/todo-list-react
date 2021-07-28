import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toTask } from "../../../../routes";
import {
  selectTasksByQuery,
  toggleTaskDone,
  removeTask,
  selectHideDoneTasks,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { Item, List, Content, Button, StyledLink } from "./styled";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDoneTasks}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
