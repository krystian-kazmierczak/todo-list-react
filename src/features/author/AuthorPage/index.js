import { Link } from "react-router-dom";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

export default function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Krystian Kaźmierczak"
        body={
          <>
            <p>
              <strong>Kocham IT</strong> i uczę się programowania! 💖
            </p>
            <p>Moim celem jest zostać frontend developerem 💫</p>
            <p>Chcesz dowiedzieć się więcej o moich projektach?</p>
            <p>
              Spojrzeć na mój profil na githubie:{" "}
              <Link to="https://github.com/krystian-kazmierczak">GitHub</Link>
            </p>
          </>
        }
      />
    </Container>
  );
}
