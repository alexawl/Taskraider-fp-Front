import styled from 'styled-components';

export const CardContainer = styled.div`
    padding: 0.5em;
    margin:1em;
    margin-top:2em;
    width: 100%;
    // border: solid;
    // border-color:#03a7d5
    border-width:1px;
    border-radius:12px;
    background: ${props => props.backgroundColor ? props.backgroundColor : "lightgray"};
    text-align:center;
    
    
    &:hover{
        // background:#c3c2c7;
        transform: translate(1em,0);
    }
    
    `;

export const Logo = styled.img`
    src: ${props => props.src};
    width:100px;
    height:100px;
    border-radius:50%;
    margin:2px;

`
export const JobTitle = styled.div`
    text-align:center;
    font-size:1.25rem;
    padding-top:0.25em;

    @media (min-width: 576px) {
        padding-top:1em;
        text-align:left;    
        width:50%;
        padding-left:1rem;
      }
`
export const JobLocation = styled.div`
    padding-top:0.25em;
    text-align:center;
    font-size:0.9rem;
    text-align:center;

    @media (min-width: 576px) {
        text-align:left;    
        padding-left:1rem;
      }
`