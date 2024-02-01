import Aside from "../components/Aside";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import Main from "../components/Main";

export function Home() {
    return(
        <>
            <Container>
                <Header />
                <Main />  
                <Aside />
            </Container>
      </>
    )
}