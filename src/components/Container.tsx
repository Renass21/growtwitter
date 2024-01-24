import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: auto;

    background-color: azure;
    max-width: 600px;

    @media screen and (min-width: 600px) {
      max-width: 800px;
    }

    /* #left {
      background-color: beige;
      min-width:180px;
    }

    #content{
      background-color: black;
      flex: 1;
    } */

    /* #right{
      background-color: blueviolet;
      min-width: 180px;
    } */

`