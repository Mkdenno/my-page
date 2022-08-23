import React from "react";
import styled from "styled-components";
// import {cards} from './data'
// import Employees from './Employees'

const Container = styled.div`
  width: 75%;
  margin-top: 35px;
`;
const BackGround = styled.div`
  height: 25%;
  background-color: red;
  border-radius: 0 10px 10px 0;
`;
const Cards = styled.div`
  display:flex;
  justify-content:space-around;
  margin:30px;
`;
const CustomersCard = styled.div`
`;
const Customcard = styled.div`
border:1px solid lightgrey;
border-radius:10px;
padding :10px;
margin:5px 0;

`;
const Empoyeecard = styled.div`
border:1px solid lightgrey;
border-radius:10px;
margin:10px 0;
padding :10px;


`;
const Revenuecard = styled.div`
border:1px solid lightgrey;
border-radius:10px;
margin:5px 0;
padding :10px;



`;


const PitchDeck = styled.div`
border:1px solid lightgrey;

`;
const Image = styled.image``;

const Btn=styled.div`
display:flex;
justify-content:flex-end;
margin:10px;
`
const Button = styled.button`
padding:8px 25px;
border-radius:5px;
border:none;


`;
const Button2 = styled.button`
background-color:orange;
margin-left:10px;
padding:8px 25px;
border-radius:5px;
border:none;
color:white;


`;

const Body = () => {
  return (
    <Container>
      <BackGround></BackGround>
      <Cards>
        <CustomersCard>
          <Customcard>
            <h2>Customer</h2>
            <p>646,813</p>
          </Customcard>
          <Empoyeecard>
            <h2>Employees</h2>
            <p>646,813</p>
          </Empoyeecard>
          <Revenuecard>
            <h2>Annual Revenue</h2>
            <p>646,813</p>
          </Revenuecard>
        </CustomersCard>

        <PitchDeck>
            <h4>Pitch Deck</h4>
            <img  width="600" height="300" src="https://images.pexels.com/photos/11489837/pexels-photo-11489837.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/><br/>
          <Btn>
          <Button>Remove</Button>
            <Button2>Upload</Button2>
          </Btn>
        </PitchDeck>
      </Cards>
    </Container>
  );
};

export default Body;
