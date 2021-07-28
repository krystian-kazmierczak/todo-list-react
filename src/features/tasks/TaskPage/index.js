import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../../../common/Container/styled";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { getTaskById } from "../tasksSlice";

export default function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie ma takiego zadania! 😜"}
        body={
          task && (
            <>
              <strong>Ukończono: </strong>
              {task.done ? "Tak 👏" : "Nie 😞"}
            </>
          )
        }
      />
    </Container>
  );
}
