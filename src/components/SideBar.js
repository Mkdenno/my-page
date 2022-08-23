import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
width:25%;
border-radius:1rem;
`
const Header=styled.div`
`
const Image=styled.img`
height:100px;
width:100px;
border-radius:50%;


`
const List=styled.ul`
list-style:none;
border:1px solid lightgrey;
padding-right:10px;
border-radius:12px;

`
const BusinessName=styled.li`
border-bottom:1px solid lightgrey;
padding:10px;


`
const H3=styled.h3`

`
const ParaGraph=styled.p`

`

const DashBoard=styled.li`
border-bottom:1px solid lightgrey;
padding:10px;



`
const Website=styled.li`
border-bottom:1px solid lightgrey;
padding:10px;



`
const ExecutiveSummary=styled.li`
border-bottom:1px solid lightgrey;
padding:10px;



`
const BusinessDocuments=styled.li`
border-bottom:1px solid lightgrey;

padding:10px;



`
const LegalInformation=styled.li`
padding:10px;



`
const Button=styled.button`
width:100%;
background-color:orange;
padding:20px;
color:white;
font-size:16px;
font-weight:700;
display:flex;
justify-content: flex-start;
margin:auto;
border-radius:5px;
border:none;
margin-top:5px;
`

const SideBar = () => {
  return (
    <Container>
          <Header>My Business</Header>
   <List>
   <Image src="https://images.pexels.com/photos/11489837/pexels-photo-11489837.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"/>
      <BusinessName>
        <H3>Business Name</H3>
        <ParaGraph>Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Auctor id purus adipiscing aenean.
Neque maecenas sit libero congue feugiat
commodo hac.</ParaGraph>
      </BusinessName>
      <DashBoard>DashBoard</DashBoard>
      <Website>Website</Website>
      <ExecutiveSummary>Executive Summary</ExecutiveSummary>
      <BusinessDocuments>Business Documents</BusinessDocuments>
      <LegalInformation>Legal Information</LegalInformation>
   </List>

      <Button>Start Pitch</Button>
     
    </Container>
  )
}

export default SideBar