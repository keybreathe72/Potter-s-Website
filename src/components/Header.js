import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
    return (
        <Container>
            <a href="/">
                    <img src="/images/Logo.png" alt=""/>
                </a>
                <Menutext>
                <h1>Potter's Delivery</h1>
                </Menutext>

            <Menu>
                <a href="/">Register</a>
                <a href="/">Featured</a>
                <a href="/">Download</a>
                
            </Menu>
            <RMenu>
                <a href="/">Contact Us</a>
                <Nav>
                    <MenuIcon/>

                </Nav>
                

            </RMenu>

        </Container>
    )
}

export default Header

const Container = styled.div`
position: fixed;
height: 50px;
display: flex;
background-color: #262626;
top: 0;
left: 0;
right: 0;
z-index: 1;
h1{
    color: white;
    font-size: 20px;
}
p{
    color: white;
    font-size: 15px;
}
img{
    padding: 0 40px;
    height: 80px;
}`

const Menutext = styled.div`
align-items: center;
flex-direction: column;
text-align: center;`

const Menu = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: center;
a{
    text-decoration: none;
    color: white;
    padding: 0 30px;
  }
@media (max-width:768px){
    display: none;
}
  `
const RMenu = styled.div`
display: flex;
align-items: center;
justify-content: center;
a{
    text-decoration: none;
    color: white;
  }`

const Nav = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
padding: 0 50px;`