import React from 'react'
import styled from 'styled-components'

const Cricle = styled.div`
  border-radius: 50%;
  border: 1px solid grey;
  height: 180px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left : 50%;
  transform: translateX(-50%);

  & div{
    margin-bottom: 6px;
  }

  & p{
    font-size: 20px;
    color: grey;
  }
  

`

const Rating = ({ label, icon, rating }) => {
  return (

    <div className="glide__slide">
      <Cricle >
        <div className={`fas fa-${icon} fs-3`}></div>
        <div>{rating}</div>
        <div>
          <p>{label}</p>
        </div>
      </Cricle>
    </div>
  )
}

export default Rating
