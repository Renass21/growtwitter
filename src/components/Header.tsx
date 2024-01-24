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
            
            <nav id='left'>
            
            <p>left menu</p>
          </nav>
        </HeaderStyled>

    )
}

