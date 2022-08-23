import React from 'react'

const Employees = ({item}) => {
  return (
    <div>
        <h1>{item.customer}</h1>
        <p>{item.amount}</p>
    </div>
  )
}

export default Employees