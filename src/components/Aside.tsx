import styled from "styled-components";
import { Home } from "../pages/Home";


const StyledAside = styled.aside`
display: flex;
justify-content: start ; 
align-items: center;
flex-direction: column;
min-width: 180px;
border: 2px solid white;
background-color: black;

div {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid darkgray;
  background-color: darkgray;
  border-radius: 1rem;
}
ul {
  padding: 1rem;
  list-style: none;
}

li {
  padding: 0.5rem;
}

#mostrar-mais {
  text-decoration: s;
  padding: 0;
  margin-bottom: 0;
}
`


const Aside = () => {
    return (
      <StyledAside>
        <div>
          <h3>O que está acontecendo?</h3>
          <ul>
          <li>
            <p>Esportes - Há 1 min</p>
            <p>Assunto sobre Esportes</p>
          </li>
          <li>
            <p>Assunto do momento em Brasil</p>
            <p>Assunto em Brasil</p>
          </li>
          <li>
            <p>Musica - Assunto do momento</p>
            <p>Assunto sobre Música</p>
          </li>
          <li>
            <p>Cinema - Assunto do momento</p>
            <p>Assunto sobre Filmes e Cinema</p>
          </li>
        </ul>
        <div id="mostrar-mais">
          <a ref={Home}>Mostrar mais</a>
        </div>
      </div>
          
      </StyledAside>
  );
}

export default Aside;