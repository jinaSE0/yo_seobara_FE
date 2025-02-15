import styled from "styled-components";


export const BodyBox = styled.div`


height:100%;
display: grid;
grid-template-columns: 2fr 3fr;
grid-template-rows:1fr 1fr 2fr 3fr 1fr;
grid-template-areas:
'top side'
'header header'
'title title'
'main main'
'footer footer'
`;

export const BodyTop = styled.div`
grid-area:top;
border:1px solid black;


`;

export const BodySide = styled.div`
grid-area:side;
border:1px solid black;


`;

export const BodyHeader = styled.div`
grid-area:header;
overflow: auto;
display: flex;
border:1px solid black;
`;
export const BodyTitle = styled.div`
grid-area:title;
border:1px solid black;
`;

export const BodyMain = styled.div`
grid-area:main;
overflow:auto;
border-radius:2px;
border:1px solid black;
`;


export const Footer = styled.div`
grid-area:footer;
border-radius:1px;
border:1px solid black;


`;
export const Time = styled.p`
font-size: 17px;
// display:block;
`;