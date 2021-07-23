import {Item, List, Content, Button} from "./styled";

const TasksList = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone}) => (
  <List>
    {tasks.map((task) => (
      <Item
        key={task.id}
        hidden={task.done && hideDoneTasks}
      >
        <Button
          done 
          onClick={()=>toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>
                    {task.content}
                </Content>
        <Button
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);
export default TasksList;
