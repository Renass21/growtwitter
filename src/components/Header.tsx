import styled from "styled-components";
import logo from "../assets/LOGO_GROWTWEET.svg";
import perfil from "../assets/MARCAÇAO_FOTO_PERFIL.svg";

const HeaderStyled = styled.div`
  color: white;
  padding: 8px 12px;
  display: flex;
  min-width: 180px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid white;
  background-color: black;

  ul {
    margin: 0;
    padding: 1rem;
    list-style: none;
  }

  a {
    color: white;
  }

  .logout {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;
  }

  .navbar button {
    background-color: #1d37f0;
    color: #ffffff;
    margin-top: 0.75rem;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    max-width: 10.125rem;
    width: 100%;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: #ffffff;
  }
  .logout-profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  img {    
        width: 40px;
        border-radius: 50%;
    }
  .logout-adress {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled id="left">
      <div className="navbar">
        <div>
          <img src={logo} alt="logo-growtweeter" />
        </div>
        <ul id="left">
          <li>
            <a href="">Pagina incial</a>
          </li>
          <li>
            <a href="">Explorar</a>
          </li>
          <li>
            <a href="">Explorar</a>
          </li>
        </ul>
        <button>Tweetar</button>
      </div>
      <div className="logout">
        <div className="logout-profile">
          <div>
            <img src={perfil} alt="profile-photo" />
          </div>
          <div className="logout-adress">
            <p>Renato dos Santos</p>
            <p>@Renass21</p>
          </div>
        </div>
        <p>
          <a href="">Sair</a>
        </p>
      </div>
    </HeaderStyled>
  );
};
