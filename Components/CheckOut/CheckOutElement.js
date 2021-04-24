import styled from 'styled-components'
import formImg from '../../images/delivery.svg'

export const Error = styled.p`
    color : red;
`

export const CheckOutContainer = styled.div`
    background : linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),url(${formImg});
    height : 100vh;
    max-height : 650px;
    background-position : center;
    background-size : cover;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    color : #fff;
    text-align : center;
    padding : 0 1rem;
`
export const FormContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    text-align : center;
    padding : 5rem 3rem;
    background-color : transparent;

    @media screen and (max-width : 500px) {
        padding : 3rem 2rem;
    }
`
export const FormControl = styled.div`
    margin-bottom : 1rem;
`
export const Button = styled.button`
    font-size : 1.4rem;
    padding : 0.6rem 3rem;
    border : none;
    border-radius : 5px;
    background : #ffc500;
    color : #000;
    transition : 0.2s ease-out;

    &:hover {
        color : #fff;
        background : #e31837;
        transition : 0.2s ease-out;
        cursor : pointer;
    }

    &:disabled {
        background : grey;
        cursor : not-allowed;
        color : #000;
    }
`
export const InputField = styled.div`
    padding : 1rem;
`