import { useState } from "react";
import { useTasks } from "../../useTasks";
import Form from "./Form";
import Tasks from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container/styled";

function Task() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);
  };

  const { tasks, removeTask, toggleTaskDone, setAllTaskDone, addNewTask } =
    useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDoneTasks={toggleHideDoneTasks}
            setAllTaskDone={setAllTaskDone}
          />
        }
      />
    </Container>
  );
}

export default Task;
