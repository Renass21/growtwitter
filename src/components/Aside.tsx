import styled from "styled-components";


const StyledAside = styled.aside`
display: flex;
min-width: 180px;
border-left: 1px solid black;
`


const Aside = () => {
    return (
        <StyledAside>
        <p>right menu</p>
      </StyledAside>
  );
}

export default Aside;