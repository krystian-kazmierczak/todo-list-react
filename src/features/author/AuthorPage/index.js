import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Link } from "./styled";

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
              Zajrzyj na moją stronę na{" "}
              <Link
                href="https://github.com/krystian-kazmierczak"
                target="_blank"
              >
                GitHub
              </Link>
            </p>
          </>
        }
      />
    </Container>
  );
}
