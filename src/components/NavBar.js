import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:100px;
display:flex;
justify-content:space-between;
margin:0 1.5rem;
`

const Logo=styled.div`

`
const Image=styled.img`
height:100px;
width:100px;
border-radius:50%;

`
const Logout=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:20px;

`
const Image2=styled.img`
height:50px;
width:50px;
border-radius:50%;

`
const Link=styled.h3`

`



const NavBar = () => {
  return (
    <Container>
     <Logo>
     <Image src="https://images.pexels.com/photos/11489837/pexels-photo-11489837.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"/>
     </Logo>
     <Logout>
     <Image2 src="https://images.pexels.com/photos/11489837/pexels-photo-11489837.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"/>
        <Link> Logout</Link>
     </Logout>
    </Container>
  )
}

export default NavBar