import styled from 'styled-components';

// Det her er et styled component. 
//Jeg valgte at lave det til et styled component, fordi det er et simpelt component
export const Seperator = styled.hr`
    border-image: linear-gradient(to right, rgb(224, 15, 16), rgb(23, 55, 147));
    border-image-slice: 1;
    display: block;
    width: 100%;
    margin: 20px 0;
`;

