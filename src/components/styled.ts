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
    
    width: 45rem;

    p {
        font-size: 1rem;
        font-weight: bolder;
    }

    div {
        display: flex;
        align-items: center ;
        gap: 15px;
        cursor: pointer ;
    }
`;

export const Search = styled.div`
    width: 45rem;
    height: 3.6rem ;
    background-color: ${props => props.theme.colors.secundary};
    display: flex;
    align-items: center;
    color: ${props => props.theme.title};
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 2rem ;
   

    input {
        width: 100%;
        height: 2.2rem ;
        background-color: ${props => props.theme.colors.secundary};
        border: none;
        color: ${props => props.theme.colors.text};
        font-size: 1.2rem;
        margin-left: 10px ;
    }

    input:focus {
       letter-spacing: 1px;
        outline: 0;
    }

    button {
        background-color: ${props => props.theme.colors.primaryButton};
        border: none;
        cursor: pointer;
        color: ${props => props.theme.colors.text};
        width: 6rem;
        height: 2.7rem;
        border-radius: 10px ;

        transition: all 0.3s ;
    }

    button:hover {
        opacity: 0.8 ;
    }
`;

export const Card = styled.section`
    background-color: ${props => props.theme.colors.secundary};
    width: 100%;
    height: 100%;
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
           
            border-radius: 50%;
            border: 1px solid white;
            margin: 2rem ;
        }

        .bio, .data {
            opacity: 0.5;
            
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
            color: ${props => props.theme.colors.primaryButton};
        }
    }

    .info {
        width: 63%;
        height: 5rem ;
        background-color: ${props => props.theme.colors.background};
        margin: 0 auto;
        border-radius: 10px;

        div {
            width: 100% ;
            height: 100% ;
            display: flex ;
            flex-direction: row ;
            padding: 0;
        }  
        
        div > div {
            display: flex ;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            span {
                opacity: 0.5;
            }

            strong {
                font-weight: bold;
                margin-top: 5px;
            }
        }
    }
`;

export const DatasGit = styled.div`
    width: 100%;
    display: flex;   
    margin: 0 auto;

    .datasgithub {
        width:70%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        flex-direction: row;
        flex-wrap: wrap ;
        padding: 0 ;

        div {
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: row;
            margin-right: 30px;

            span {
                margin-left: 10px;

                a {
                    color: ${props => props.theme.colors.text};
                    cursor: pointer;

                    transition: all 0.3s ;
                }

                a:hover {
                    opacity: 0.8;
                }
            }
        }  
    }

`;