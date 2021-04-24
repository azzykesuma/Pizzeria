import styled from 'styled-components';

export const DesertsContainer = styled.div`
    width: 100vw;
    min-height : 100vh;
    padding : 5rem calc((100vw - 1300px) /2);
    background: #150f0f;
    color : #fff;
`

export const DesertWrapper = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content :center;
    margin : 0 auto;
`

export const DesertCard = styled.div`
    margin : 0 2rem;
    line-height : 2;
    width : 300px;
`

export const DesertImg = styled.img`
    height : 300px;
    min-width : 300px;
    max-width : 100%;
    box-shadow : 8px 8px #fdc500;
`

export const DesertHeading = styled.h1`
    font-size : clamp(2rem, 2.5vw, 3rem);
    text-align : center;
    margin-bottom : 5rem;
`
export const DesertTitle = styled.h2`
    font-weight : 400;
    font-size : 1.5rem;
`
export const DesertInfo = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding : 2rem;
    text-align : center;
`
export const DesertDesc = styled.p`
    margin-bottom : 1rem;
`
export const DesertPrice = styled.p`
    margin-bottom : 1rem;
    font-size : 2rem;
`

export const DesertButton = styled.button`
    font-size: 1rem;
    padding : 1rem 3rem;
    border: none;
    border-radius : 5px;
    background : #e31837;
    color : #fff;
    transition : 0.2s ease-out;
    display : inline-grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    grid-gap : 10px;

    &:hover {
        background : #ffc500;
        color : #000;
        transition : 0.2s ease-out;
        cursor : pointer;
    }
`