import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './productElement'
import { FaCartArrowDown } from 'react-icons/fa'

const Products = ({heading,data}) => {

    // const HandleClick = (e,product) => {
    // e.preventDefault();
    // alert(`${product.name} is added to the cart`)
    // }

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {
                    data.map((product,index) => {
                        return (
                            <ProductCard key={index}>
                                <ProductImg src={product.img} alt={product.alt} />
                                <ProductInfo>
                                    <ProductTitle>{product.name}</ProductTitle>
                                    <ProductDesc>{product.desc}</ProductDesc>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductButton onClick={(name) => {alert(`${product.name} is added to the cart!`)}} to='/Checkout'>{product.button} <FaCartArrowDown /></ProductButton>
                                </ProductInfo>                                
                            </ProductCard>
                        )
                    })
                }
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
