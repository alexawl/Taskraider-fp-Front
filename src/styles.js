import styled from 'styled-components';

export const mainColor = "#728992";
export const secondaryColor = "rgb(255, 255, 255, 0.33)";

export const Button = styled.button`
    background: ${props => props.primary ? mainColor : "#728992"};
    color: ${props => props.primary ? "white" : mainColor};

    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${mainColor};
    border-radius: 3px;
    `;


export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    color: white;
    `;

export const Subtitle = styled.h2`
    font-size:1.5rem;
    text-align: center;
    color: ${mainColor}
    `;


// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
    padding: 4em;
    background: ${props => props.backgroundColor ? props.backgroundColor : ""};
    text-align: center;

span {
    font - size: 1rem;
    color: ${ mainColor};
}
`;