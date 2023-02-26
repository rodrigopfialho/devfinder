import styled from "styled-components";

export const Container = styled.main`
    display: flex ;
    justify-content: center;
    height: 75%;
`;

export const Content = styled.div`
    margin-top: 4rem ;
    width: 45rem;
    
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between; 
    align-items: baseline ;
    font-family: 'PT Sans', sans-serif;
    margin-bottom: 1.2rem ;

   > p {
        font-size: 1.5rem;
    }

    div {
        display: flex;
        align-items: center ;
        gap: 15px;
    }
`;

export const Search = styled.div`
    width: 45rem;
    height: 3.6rem ;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    color: var(--white);
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 2rem ;
   

    input {
        width: 100%;
        height: 2.2rem ;
        background-color: var(--blue);
        border: none;
        color: var(--white);
        font-size: 1.2rem;
        margin-left: 10px ;
    }

    input:focus {
       letter-spacing: 1px;
        outline: 0;
    }

    button {
        background-color: var( --blueLight) ;
        border: none;
        cursor: pointer;
        color: var(--white);
        width: 6rem;
        height: 2.7rem;
        border-radius: 10px ;
    }
`;

export const Card = styled.section`
    background-color: var(--blue);
    width: 100%;
    height: 100% ;
    border-radius: 12px;
    font-family: 'PT Sans', sans-serif;
    display: flex ;
    align-items: baseline ;
    
    flex-direction: column ;
    
    div {
        display: flex;
        width: 90%;
        margin-bottom: 10px;

        img {
            width: 5rem;
            height: 5rem ;
            background-color: red ;
            border-radius: 50%;
            margin: 2rem ;
        }
    }

    .data{
        margin-top: 30px;
        
    }

    div > div {
        display: flex;
        flex-direction: column ;
        padding-top: 30px;
        width: 50%;

        h1 {
            padding-bottom: 5px ;
        }

        .profile {
            display: flex;
            align-items: flex-start ;
            padding-bottom: 1px;
            color: var(--blueLight);
        }
    }

    .info {
        width: 63%;
        height: 5rem ;
        background-color: var(--blueDark);
        margin: 0 auto;
        border-radius: 10px;

        div {
            width: 100% ;
            height: 100% ;
            display: flex ;
            flex-direction: row ;
            padding: 0;
        }     
    }

    .infoData {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        /* span {
            display: block ;
            margin-right: 10px;
        } */
    }
`;