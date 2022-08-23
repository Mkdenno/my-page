import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Body from './Body'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
margin:30px;
`

const Home = () => {
  return (
    <div>
       <NavBar/> 
       <hr/>
       <Container>
       <SideBar/>
       <Body/>
       </Container>
    </div>
  )
}

export default Home