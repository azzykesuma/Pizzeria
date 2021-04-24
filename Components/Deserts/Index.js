import React from 'react'
import {
    DesertsContainer,
    DesertWrapper,
    DesertCard,
    DesertHeading,
    DesertPrice,
    DesertInfo,
    DesertImg,
    DesertTitle,
    DesertDesc,
    DesertButton
} from './DesertElement'
import { FaCartArrowDown } from 'react-icons/fa'


const Deserts = ({data,heading}) => {
    return (
        <DesertsContainer>
            <DesertHeading>{heading}</DesertHeading>
            <DesertWrapper>
                {
                    data.map((product,index) => {
                        return (
                            <DesertCard key={index}>
                                <DesertImg src={product.img} alt={product.alt} />
                                <DesertInfo>
                                    <DesertTitle>{product.name}</DesertTitle>
                                    <DesertDesc>{product.desc}</DesertDesc>
                                    <DesertPrice>{product.price}</DesertPrice>
                                    <DesertButton onClick={(name) => {alert(`${product.name} is added to the cart!`)}}>{product.button} <span><FaCartArrowDown /></span></DesertButton>
                                </DesertInfo>                                
                            </DesertCard>
                        )
                    })
                }
            </DesertWrapper>
        </DesertsContainer>
    )
}

export default Deserts
