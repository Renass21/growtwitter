import styled from "styled-components";


const StyledAside = styled.aside`
display: flex;
min-width: 180px;
border-left: 1px solid black;
`


const Aside = () => {
    return (
        <StyledAside>
          <h1>O que está acontecendo?</h1>
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
        <div>
          <a href="#">Mostrar mais</a>
        </div>
      </StyledAside>
  );
}

export default Aside;