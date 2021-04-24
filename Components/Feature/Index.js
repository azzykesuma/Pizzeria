import React from 'react'
import {
    FeatureContainer,
    FeatureButton
} from './FeatureElement'

const Feature = ({product}) => {
    return (
        <FeatureContainer>
            <h1> Pizza of the Day </h1>
            <p> A Heavy crusted chesse to those who brave to swallow it all!</p>
            <FeatureButton onClick={(name) => alert(`added to the cart!`)}>Order Now!</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
