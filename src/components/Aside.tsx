import styled from "styled-components";
import { Home } from "../pages/Home";


const StyledAside = styled.aside`
display: flex;
justify-content: start ; 
align-items: center;
flex-direction: column;
min-width: 180px;
border-left: 1px solid white;
background-color: #2F3136;

.trending-topics {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid darkgray;
  background-color: #2F3136;
  border-radius: 1rem;
}
h3 {
  font-weight: bolder;
  font-size: 14px;
  color: #ffffff;
}
ul {
  padding: 1rem;
  color: #ffffff;
  list-style: none;
}

li {
  padding: 0.5rem;
}

li p:hover {
  color: #596af0;
  text-decoration: none;
}


#mostrar-mais {
  padding: 0;
  margin-bottom: 0;
}
a {
  text-decoration: underline;
  color: #1d37f0;
}
a:hover {
  color: #596af0;
  text-decoration: underline;
}

p {
  font-weight: bolder;
  font-size: 14px;
  color: #ffffff;
}
`


const Aside = () => {
    return (
      <StyledAside>
        <div className="trending-topics">
          <h3>O que está acontecendo?</h3>
          <ul>
          <li>
            <span>Esportes - Há 1 min</span>
            <p>Assunto sobre Esportes</p>
          </li>
          <li>
            <span>Assunto do momento em Brasil</span>
            <p>Assunto em Brasil</p>
          </li>
          <li>
            <span>Musica - Assunto do momento</span>
            <p>Assunto sobre Música</p>
          </li>
          <li>
            <span>Cinema - Assunto do momento</span>
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