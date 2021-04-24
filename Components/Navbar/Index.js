import React from 'react'
import { 
    Nav,
    NavIcon,
    NavLink,
    Bars
} from './Navbar.element'

const Navbar = ({toggle}) => {
    return (
    <>
        <Nav>
            <NavLink to='/'>Pizzeria</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
        </Nav>   
    </>
    )
}

export default Navbar
