import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container/styled";
import Search from "./Search";

export default function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraContent={<Buttons />}
      />
    </Container>
  );
}
