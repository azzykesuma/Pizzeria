import React,{ useState } from 'react'
import Navbar from '../Navbar/Index'
import { 
    HeroContainer,
    HeroContent,
    HeroItem,
    HeroH1,
    HeroP,
    HeroBtn
 } from './Hero.element'
import SideBar from '../SideBar/Index'

const Hero = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItem>
                    <HeroH1> Greatest Pizza Just for You!</HeroH1>
                    <HeroP> Ready in 60 Seconds!</HeroP>
                    <HeroBtn>Order Now!</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
