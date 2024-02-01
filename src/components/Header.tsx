import styled from "styled-components";
import logo from "../assets/LOGO_GROWTWEET.svg"

const HeaderStyled = styled.div`
    color: blue;
    padding: 8px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Header = () => {
    return(
        <HeaderStyled id="left">
            <div >
                <img src={logo} alt="logo-growtweeter" />
            </div>
            <ul id='left'>
                    <li>
                    <a>Pagina incial</a>
                    </li>
                    <li>
                    <a href="">Explorar</a>
                    </li>
                    <li>
                    <a href="">Explorar</a>
                    </li>    
            </ul>
            <button>Tweetar</button>
            <div>
                <div>
                    <img src={logo} alt="profile-photo"/>
                </div>
                <div>
                    <h1>Renato</h1>
                    <span>@Renass21</span>
                </div> 
                <button>Sair</button>
            </div>
        </HeaderStyled>

    )
}

