import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute,
} from './SidebarElement'

const SideBar = ({isOpen,toggle}) => {
    
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />    
            </Icon>
            <SidebarMenu>
                <SidebarLink to ='/'>Pizzas</SidebarLink>
                <SidebarLink to ='/'>Promo</SidebarLink>
                <SidebarLink to ='/'>Vendors</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to='/'>Order Now!</SidebarRoute>
            </SidebarBtnWrap>            
        </SidebarContainer>
    )
}

export default SideBar
